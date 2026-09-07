// src/components/LessonView/LessonView.jsx
import React, { useState } from 'react'
import QuizEngine from '../QuizEngine/QuizEngine.jsx'
import { 
  FileTextIcon, 
  LockIcon, 
  ArrowRightIcon, 
  Volume2Icon, 
  ClockIcon, 
  LayersIcon, 
  BookIcon, 
  TargetIcon 
} from '../Icons.jsx'
import { speakEnglish } from '../../utils/speech.js'
import './LessonView.css'

// Helper para asignar nivel CEFR según la etapa
const getLessonLevel = (lessonId) => {
  const num = parseInt(lessonId.replace('lesson-', ''), 10) || 1
  if (num <= 5) return { code: 'A1 - Principiante', time: '5 min' }
  if (num <= 8) return { code: 'A2 - Elemental', time: '6 min' }
  if (num <= 12) return { code: 'B1 - Intermedio', time: '7 min' }
  if (num <= 15) return { code: 'B1+ - Intermedio Alto', time: '8 min' }
  if (num <= 19) return { code: 'B2 - Avanzado Técnico', time: '9 min' }
  return { code: 'C1 - Dominio Fluido', time: '10 min' }
}

const LessonView = ({ 
  lesson, 
  isUnlocked = true, 
  prerequisiteLesson, 
  onSelectLesson, 
  onNextLesson, 
  hasNextLesson 
}) => {
  const [activeTab, setActiveTab] = useState('theory') // 'theory' | 'examples' | 'quiz'
  const [playingAudioIdx, setPlayingAudioIdx] = useState(null)

  if (!lesson) return null

  // Si la lección está bloqueada
  if (!isUnlocked) {
    return (
      <article className="lesson-view lesson-locked-view">
        <div className="locked-card">
          <div className="locked-icon-halo">
            <LockIcon size={36} className="locked-svg" />
          </div>
          <span className="locked-pill">CONTENIDO BLOQUEADO</span>
          <h2>{lesson.title}</h2>
          <p className="locked-desc">
            Para garantizar un aprendizaje progresivo y sólido, esta sección permanece bloqueada hasta que evalúes y apruebes la lección previa.
          </p>

          {prerequisiteLesson && (
            <div className="prerequisite-card">
              <span className="prereq-label">Requisito pendiente:</span>
              <h4 className="prereq-title">{prerequisiteLesson.title}</h4>
              <p className="prereq-hint">Aprueba el cuestionario (mínimo 4/5 correctas) para habilitar esta lección.</p>
            </div>
          )}

          <div className="locked-actions">
            <button 
              className="quiz-btn quiz-btn-primary" 
              onClick={() => onSelectLesson(prerequisiteLesson ? prerequisiteLesson.id : 'lesson-1')}
            >
              Completar requisito: {prerequisiteLesson ? prerequisiteLesson.title : 'Lección 1'} <ArrowRightIcon size={16} />
            </button>
          </div>
        </div>
      </article>
    )
  }

  const { code: levelCode, time: estimatedTime } = getLessonLevel(lesson.id)

  const handlePlayAudio = (text, idx) => {
    setPlayingAudioIdx(idx)
    speakEnglish(
      text,
      () => setPlayingAudioIdx(idx),
      () => setPlayingAudioIdx(null)
    )
  }

  return (
    <article className="lesson-view">
      {/* ─── Hero Header con Metadatos del Módulo ─── */}
      <header className="lesson-hero">
        <div className="lesson-meta-row">
          <span className="meta-badge meta-level">
            <LayersIcon size={13} /> {levelCode}
          </span>
          <span className="meta-badge meta-time">
            <ClockIcon size={13} /> {estimatedTime}
          </span>
          <span className="meta-badge meta-status">
            Activa y en progreso
          </span>
        </div>
        <h2 className="lesson-hero-title">{lesson.title}</h2>
        <p className="lesson-hero-sub">
          Domina los fundamentos técnicos, analiza estructuras con ejemplos bilingües y valida tu comprensión en la evaluación.
        </p>

        {/* ─── Pestañas de Navegación del Módulo ─── */}
        <nav className="lesson-tabs" aria-label="Secciones del módulo">
          <button 
            className={`tab-btn ${activeTab === 'theory' ? 'active' : ''}`}
            onClick={() => setActiveTab('theory')}
          >
            <BookIcon size={16} /> Teoría y Fórmulas
          </button>
          <button 
            className={`tab-btn ${activeTab === 'examples' ? 'active' : ''}`}
            onClick={() => setActiveTab('examples')}
          >
            <Volume2Icon size={16} /> Ejemplos con Audio
            {lesson.examples?.length > 0 && (
              <span className="tab-count">{lesson.examples.length}</span>
            )}
          </button>
          <button 
            className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}
            onClick={() => setActiveTab('quiz')}
          >
            <TargetIcon size={16} /> Evaluación
            {lesson.quizBank?.length > 0 && (
              <span className="tab-count">5 preguntas</span>
            )}
          </button>
        </nav>
      </header>

      {/* ─── Pestaña 1: Teoría y Fórmulas ─── */}
      {activeTab === 'theory' && (
        <section className="tab-pane tab-pane-theory">
          {lesson.theory && (
            <div 
              className="lesson-theory" 
              dangerouslySetInnerHTML={{ __html: lesson.theory }}
              aria-label="Teoría de la lección"
            />
          )}

          <div className="tab-footer-nav">
            <button 
              className="quiz-btn quiz-btn-primary" 
              onClick={() => setActiveTab('examples')}
            >
              Continuar a Ejemplos con Audio <ArrowRightIcon size={16} />
            </button>
          </div>
        </section>
      )}

      {/* ─── Pestaña 2: Laboratorio de Ejemplos con Audio ─── */}
      {activeTab === 'examples' && (
        <section className="tab-pane tab-pane-examples" aria-label="Laboratorio de Ejemplos">
          <div className="section-title-row">
            <FileTextIcon size={20} className="section-icon" />
            <div>
              <h3>Laboratorio de Pronunciación y Contexto</h3>
              <p className="section-desc">Escucha la pronunciación nativa haciendo clic en el botón de audio para entrenar tu oído.</p>
            </div>
          </div>

          <div className="examples-grid">
            {lesson.examples.map((ex, idx) => {
              const isPlaying = playingAudioIdx === idx
              return (
                <figure key={idx} className={`example-card ${isPlaying ? 'is-playing' : ''}`}>
                  <div className="example-top">
                    <blockquote className="example-en">{ex.en}</blockquote>
                    <button 
                      className={`audio-btn ${isPlaying ? 'playing' : ''}`}
                      onClick={() => handlePlayAudio(ex.en, idx)}
                      aria-label={`Escuchar pronunciación de: ${ex.en}`}
                      title="Escuchar pronunciación en inglés (Voz nativa)"
                    >
                      <Volume2Icon size={17} />
                    </button>
                  </div>
                  <figcaption className="example-es">{ex.es}</figcaption>
                  {ex.note && <p className="example-note">{ex.note}</p>}
                </figure>
              )
            })}
          </div>

          <div className="tab-footer-nav">
            <button 
              className="quiz-btn quiz-btn-secondary" 
              onClick={() => setActiveTab('theory')}
            >
              ← Volver a la Teoría
            </button>
            <button 
              className="quiz-btn quiz-btn-primary" 
              onClick={() => setActiveTab('quiz')}
            >
              Ir a la Evaluación del Módulo <ArrowRightIcon size={16} />
            </button>
          </div>
        </section>
      )}

      {/* ─── Pestaña 3: Evaluación del Módulo ─── */}
      {activeTab === 'quiz' && (
        <section className="tab-pane tab-pane-quiz">
          {lesson.quizBank && lesson.quizBank.length > 0 ? (
            <QuizEngine 
              quizBank={lesson.quizBank} 
              lessonId={lesson.id}
              questionCount={5}
              passThreshold={4}
              onNextLesson={onNextLesson}
              hasNextLesson={hasNextLesson}
              lessonTitle={lesson.title}
            />
          ) : (
            <div className="quiz-empty">
              <p>No hay preguntas configuradas para este módulo.</p>
            </div>
          )}
        </section>
      )}
    </article>
  )
}

export default LessonView