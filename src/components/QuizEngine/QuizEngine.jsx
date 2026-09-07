// src/components/QuizEngine/QuizEngine.jsx
import React, { useState, useEffect, useCallback } from "react";
import { 
  TargetIcon, 
  CheckCircleIcon, 
  XCircleIcon, 
  RotateCcwIcon, 
  AwardIcon, 
  ArrowRightIcon, 
  Volume2Icon, 
  LightbulbIcon, 
  ZapIcon 
} from "../Icons.jsx";
import { speakEnglish } from "../../utils/speech.js";
import "./QuizEngine.css";

// ─── UTILIDAD: Mezclar array (Fisher-Yates) ───
const shuffleArray = (array) => {
  const arr = [...(array || [])];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const QuizEngine = ({
  quizBank = [],
  lessonId,
  questionCount = 5,
  passThreshold = 4,
  onNextLesson,
  hasNextLesson = false,
  lessonTitle = "esta lección",
}) => {
  const [questions, setQuestions] = useState(() => {
    if (!quizBank || quizBank.length === 0) return [];
    return shuffleArray(quizBank).slice(0, Math.min(questionCount, quizBank.length));
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [shake, setShake] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // ─── INICIALIZAR QUIZ AL CAMBIAR LECCIÓN O BANCO ───
  useEffect(() => {
    if (!quizBank || quizBank.length === 0) {
      setQuestions([]);
      return;
    }

    const shuffled = shuffleArray(quizBank);
    const selected = shuffled.slice(0, Math.min(questionCount, quizBank.length));
    setQuestions(selected);
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setIsFinished(false);
    setIsSubmitted(false);
    setScore(0);
  }, [quizBank, questionCount, lessonId]);

  // ─── MARCAR LECCIÓN COMO COMPLETADA ───
  const markLessonComplete = useCallback(() => {
    try {
      const stored = localStorage.getItem("englishProgress");
      const progress = stored ? JSON.parse(stored) : { completedLessons: [] };
      const completed = Array.isArray(progress?.completedLessons) ? progress.completedLessons : [];

      if (!completed.includes(lessonId)) {
        completed.push(lessonId);
        progress.completedLessons = completed;
        localStorage.setItem("englishProgress", JSON.stringify(progress));

        // Disparar evento para que el Sidebar se actualice
        window.dispatchEvent(new Event("lessonCompleted"));
      }
    } catch (err) {
      console.error("Error guardando progreso:", err);
    }
  }, [lessonId]);

  // ─── SELECCIONAR OPCIÓN ───
  const handleSelect = useCallback((index) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  }, [isSubmitted]);

  // ─── ENVIAR RESPUESTA ───
  const handleSubmit = useCallback(() => {
    if (selectedOption === null) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    const current = questions[currentIndex];
    const isCorrect = selectedOption === current.correct;

    const answerRecord = {
      questionId: current.id,
      question: current.question,
      concept: current.concept,
      selected: selectedOption,
      correct: current.correct,
      isCorrect,
      feedback: current.feedback,
      options: current.options,
    };

    setAnswers((prev) => [...prev, answerRecord]);
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setIsSubmitted(true);
  }, [currentIndex, questions, selectedOption]);

  // ─── SIGUIENTE PREGUNTA O FINALIZAR ───
  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setIsFinished(true);
      const totalCorrect = [...answers, {
        isCorrect: selectedOption === questions[currentIndex]?.correct
      }].filter(a => a.isCorrect).length;

      setScore(totalCorrect);

      if (totalCorrect >= passThreshold) {
        markLessonComplete();
      }
    }
  }, [answers, currentIndex, markLessonComplete, passThreshold, questions, selectedOption]);

  // ─── ATAJOS DE TECLADO (A, B, C, D y Enter) ───
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Si estamos en un input o textarea ajeno, ignoramos
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const key = e.key.toLowerCase();
      if (!isSubmitted) {
        if (key === 'a' || key === '1') handleSelect(0);
        if (key === 'b' || key === '2') handleSelect(1);
        if (key === 'c' || key === '3') handleSelect(2);
        if (key === 'd' || key === '4') handleSelect(3);
        if (e.key === 'Enter' && selectedOption !== null) {
          e.preventDefault();
          handleSubmit();
        }
      } else {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handleSelect, handleSubmit, isSubmitted, selectedOption]);

  // ─── REINICIAR QUIZ ───
  const handleRestart = () => {
    const shuffled = shuffleArray(quizBank);
    const selected = shuffled.slice(0, Math.min(questionCount, quizBank.length));
    setQuestions(selected);
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setIsFinished(false);
    setIsSubmitted(false);
    setScore(0);
  };

  const handlePlayQuestionAudio = (text) => {
    setIsPlayingAudio(true);
    speakEnglish(
      text,
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false)
    );
  };

  // ─── RENDER: ESTADO VACÍO ───
  if (!quizBank || quizBank.length === 0) {
    return (
      <section className="quiz-engine" aria-label="Quiz de la lección">
        <p className="quiz-empty">Los ejercicios interactivos para esta lección estarán disponibles próximamente.</p>
      </section>
    );
  }

  // ─── RENDER: RESULTADOS FINALES ───
  if (isFinished) {
    const totalCorrect = answers.filter((a) => a.isCorrect).length;
    const passed = totalCorrect >= passThreshold;
    const percentage = Math.round((totalCorrect / questions.length) * 100);

    return (
      <section className="quiz-engine quiz-results" aria-label="Resultados del quiz">
        <header className="quiz-results-header">
          <div className="results-icon-wrapper">
            <AwardIcon size={32} className={passed ? "icon-passed" : "icon-retry"} />
          </div>
          <span className="results-status-pill">
            {passed ? "MÓDULO APROBADO CON ÉXITO" : "REQUIERE REPASO TEÓRICO"}
          </span>
          <h2>Evaluación de Competencia: {lessonTitle}</h2>
          
          <div className={`quiz-score-badge ${passed ? "passed" : "failed"}`}>
            <span className="quiz-score-number">{totalCorrect}</span>
            <span className="quiz-score-total">/{questions.length} correctas ({percentage}%)</span>
          </div>
          
          <p className="quiz-verdict">
            {passed
              ? "¡Excelente trabajo! Has demostrado dominio riguroso de las reglas, estructuras y ejemplos de este módulo. La siguiente lección ya está desbloqueada."
              : `Has acertado ${totalCorrect} de ${questions.length}. Necesitas al menos ${passThreshold}/${questions.length} para desbloquear la siguiente lección. Revisa el análisis detallado abajo y vuelve a intentarlo.`}
          </p>
        </header>

        <div className="quiz-review">
          <div className="review-title-row">
            <TargetIcon size={18} className="review-title-icon" />
            <h3>Desglose y Análisis Pedagógico de Respuestas</h3>
          </div>

          {answers.map((ans, idx) => (
            <article
              key={ans.questionId || idx}
              className={`quiz-review-card ${ans.isCorrect ? "correct" : "incorrect"}`}
            >
              <div className="review-header">
                <span className="review-index">Pregunta {idx + 1}</span>
                {ans.concept && (
                  <span className="review-concept-tag">
                    <LightbulbIcon size={11} /> {ans.concept}
                  </span>
                )}
              </div>
              <h4 className="review-question-text">{ans.question}</h4>

              <div className="review-answers-grid">
                <p className="quiz-your-answer">
                  <span className="review-label">Tu respuesta:</span>{" "}
                  <span className={ans.isCorrect ? "text-correct" : "text-wrong"}>
                    {ans.options[ans.selected]}
                  </span>
                </p>
                {!ans.isCorrect && (
                  <p className="quiz-correct-answer">
                    <span className="review-label">Respuesta esperada:</span>{" "}
                    <span className="text-correct">{ans.options[ans.correct]}</span>
                  </p>
                )}
              </div>

              <div className="quiz-feedback">
                <p>
                  <span className="feedback-label">Justificación Gramatical:</span> {ans.feedback}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="quiz-results-actions">
          {passed && hasNextLesson && onNextLesson && (
            <button className="quiz-btn quiz-btn-primary quiz-btn-lg" onClick={onNextLesson}>
              Avanzar a la siguiente lección <ArrowRightIcon size={18} />
            </button>
          )}
          <button 
            className={`quiz-btn ${passed && hasNextLesson ? "quiz-btn-secondary" : "quiz-btn-primary"}`} 
            onClick={handleRestart}
          >
            <RotateCcwIcon size={16} /> {passed ? "Repetir evaluación para reforzar" : "Reintentar cuestionario (nuevas preguntas)"}
          </button>
        </div>
      </section>
    );
  }

  // ─── RENDER: PREGUNTA ACTIVA ───
  const currentQuestion = questions[currentIndex];
  if (!currentQuestion) {
    return null;
  }
  const progressPercent = questions.length > 0 ? ((currentIndex) / questions.length) * 100 : 0;

  return (
    <section className="quiz-engine" aria-label="Quiz de la lección">
      <header className="quiz-header">
        <div className="quiz-header-top">
          <div className="quiz-title-group">
            <TargetIcon size={20} className="quiz-title-icon" />
            <div>
              <h2>Evaluación de Competencia</h2>
              <p className="quiz-header-sub">Responde basándote en la teoría y ejemplos vistos en este módulo</p>
            </div>
          </div>
          <div className="quiz-header-badges">
            <span className="quiz-keyboard-hint">Atajos: A, B, C, D</span>
            <span className="quiz-counter">
              {currentIndex + 1} / {questions.length}
            </span>
          </div>
        </div>
        <div className="quiz-progress-bar" role="progressbar" aria-valuenow={currentIndex + 1} aria-valuemax={questions.length}>
          <div
            className="quiz-progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      <article className={`quiz-card ${shake ? "shake" : ""}`}>
        {/* Insignia de Concepto Específico Evaluado */}
        <div className="question-meta-row">
          <span className="question-concept-pill">
            <LightbulbIcon size={13} /> 
            {currentQuestion.concept || `Punto clave de: ${lessonTitle}`}
          </span>
          <button 
            className={`question-audio-btn ${isPlayingAudio ? 'playing' : ''}`}
            onClick={() => handlePlayQuestionAudio(currentQuestion.question)}
            aria-label="Escuchar pronunciación del enunciado"
            title="Escuchar enunciado en inglés"
          >
            <Volume2Icon size={15} /> <span>Audio</span>
          </button>
        </div>

        <h3 className="quiz-question">{currentQuestion.question}</h3>

        <fieldset className="quiz-options" disabled={isSubmitted}>
          <legend className="sr-only">Opciones de respuesta</legend>
          {currentQuestion.options.map((option, idx) => {
            let optionClass = "quiz-option";

            if (isSubmitted) {
              if (idx === currentQuestion.correct) {
                optionClass += " option-correct";
              } else if (idx === selectedOption && idx !== currentQuestion.correct) {
                optionClass += " option-wrong";
              }
            } else if (idx === selectedOption) {
              optionClass += " option-selected";
            }

            return (
              <label key={idx} className={optionClass}>
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value={idx}
                  checked={selectedOption === idx}
                  onChange={() => handleSelect(idx)}
                  aria-label={option}
                />
                <span className="option-letter">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="option-text">{option}</span>
                <span className="option-hotkey">[{String.fromCharCode(65 + idx)}]</span>
                {isSubmitted && idx === currentQuestion.correct && (
                  <CheckCircleIcon size={18} className="option-status-icon correct" />
                )}
                {isSubmitted && idx === selectedOption && idx !== currentQuestion.correct && (
                  <XCircleIcon size={18} className="option-status-icon wrong" />
                )}
              </label>
            );
          })}
        </fieldset>

        {isSubmitted && (
          <div className={`quiz-feedback-box ${answers[answers.length - 1]?.isCorrect ? "feedback-box-correct" : "feedback-box-wrong"}`}>
            <div className="quiz-feedback-status">
              {answers[answers.length - 1]?.isCorrect ? (
                <>
                  <CheckCircleIcon size={18} />
                  <span>Respuesta Correcta</span>
                </>
              ) : (
                <>
                  <XCircleIcon size={18} />
                  <span>Respuesta Incorrecta</span>
                </>
              )}
            </div>
            <div className="quiz-feedback-detail">
              <strong>Explicación de la Regla:</strong> {currentQuestion.feedback}
            </div>
          </div>
        )}

        <div className="quiz-actions">
          {!isSubmitted ? (
            <button
              className="quiz-btn quiz-btn-primary"
              onClick={handleSubmit}
              disabled={selectedOption === null}
            >
              Confirmar respuesta <span className="btn-key-hint">Enter ↵</span>
            </button>
          ) : (
            <button className="quiz-btn quiz-btn-primary" onClick={handleNext}>
              {currentIndex < questions.length - 1 ? (
                <>Siguiente pregunta <span className="btn-key-hint">Enter ↵</span> <ArrowRightIcon size={16} /></>
              ) : (
                <>Ver resultados finales <span className="btn-key-hint">Enter ↵</span> <ArrowRightIcon size={16} /></>
              )}
            </button>
          )}
        </div>
      </article>
    </section>
  );
};

export default QuizEngine;