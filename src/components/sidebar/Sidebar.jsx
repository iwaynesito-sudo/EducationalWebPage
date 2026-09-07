// src/components/sidebar/Sidebar.jsx
import React from 'react'
import { BookIcon, CheckCircleIcon, LockIcon } from '../Icons.jsx'
import './Sidebar.css'

const cleanTitle = (title) => {
  return title.replace(/^[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}]\s*/u, '')
}

const Sidebar = ({ 
  stages = [], 
  activeLessonId, 
  completedLessons = [], 
  isLessonUnlocked, 
  onSelectLesson 
}) => {
  return (
    <nav className="sidebar" aria-label="Navegación del curso">
      <div className="sidebar-brand">
        <div className="brand-icon-wrapper">
          <BookIcon size={20} className="brand-icon" />
        </div>
        <div className="brand-text">
          <span className="brand-platform">ENGLISH MASTERY</span>
          <h2>Fluency Track</h2>
        </div>
      </div>

      <div className="stages-list">
        {stages.map((stage, sIdx) => {
          const stageNumber = String(sIdx + 1).padStart(2, '0')
          const displayTitle = cleanTitle(stage.title)

          // Evaluar estado de la etapa completa
          const stageLessonIds = stage.lessons.map(l => l.id)
          const completedInStage = stageLessonIds.filter(id => completedLessons.includes(id)).length
          const isStageCompleted = completedInStage === stageLessonIds.length
          const isStageUnlocked = stage.lessons.some(l => isLessonUnlocked ? isLessonUnlocked(l.id) : true)

          let stageStatusText = "BLOQUEADO"
          let stageStatusClass = "status-locked"

          if (isStageCompleted) {
            stageStatusText = "COMPLETADO"
            stageStatusClass = "status-completed"
          } else if (isStageUnlocked) {
            stageStatusText = `${completedInStage}/${stageLessonIds.length}`
            stageStatusClass = "status-active"
          }

          return (
            <section key={stage.id} className={`stage-group ${!isStageUnlocked ? 'stage-locked' : ''}`}>
              <header className="stage-header">
                <div className="stage-tag-row">
                  <span className="stage-num-badge">{stageNumber}</span>
                  <span className="stage-subtitle">{stage.subtitle}</span>
                  <span className={`stage-status-badge ${stageStatusClass}`}>
                    {stageStatusText}
                  </span>
                </div>
                <h3 className="stage-title">{displayTitle}</h3>
              </header>
              
              <ul className="lessons-list" role="list">
                {stage.lessons.map((lesson) => {
                  const isCompleted = completedLessons.includes(lesson.id)
                  const isUnlocked = isLessonUnlocked ? isLessonUnlocked(lesson.id) : true
                  const isActive = lesson.id === activeLessonId

                  return (
                    <li key={lesson.id}>
                      <button
                        className={`lesson-btn ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${!isUnlocked ? 'locked disabled' : ''}`}
                        onClick={() => isUnlocked && onSelectLesson(lesson.id)}
                        disabled={!isUnlocked}
                        aria-current={isActive ? 'page' : undefined}
                        title={!isUnlocked ? "Bloqueado: completa la lección anterior para desbloquear" : lesson.title}
                      >
                        <span className="lesson-status" aria-hidden="true">
                          {isCompleted ? (
                            <CheckCircleIcon size={16} className="icon-completed" />
                          ) : !isUnlocked ? (
                            <LockIcon size={13} className="icon-locked" />
                          ) : (
                            <span className="icon-dot" />
                          )}
                        </span>
                        <span className="lesson-title">{lesson.title}</span>
                        {!isUnlocked && (
                          <span className="lock-indicator-label">Bloqueado</span>
                        )}
                        {isActive && <span className="lesson-active-indicator" />}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
      </div>
    </nav>
  )
}

export default Sidebar