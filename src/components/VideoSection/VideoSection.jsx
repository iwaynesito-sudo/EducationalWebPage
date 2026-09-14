// src/components/VideoSection/VideoSection.jsx
import React, { useState, useRef, useEffect } from "react";
import { 
  Volume2Icon, 
  ArrowRightIcon, 
  CheckCircleIcon,
  SparklesIcon,
  TargetIcon
} from "../Icons.jsx";
import { speakEnglish } from "../../utils/speech.js";
import "./VideoSection.css";

export const firstConditionalQA = [
  {
    id: 1,
    num: "01",
    topic: "Platform Overview",
    question: "What will happen if a user visits this platform for the first time?",
    answer: "If a user visits this platform for the first time, they will see a guided learning path with seven progressive stages."
  },
  {
    id: 2,
    num: "02",
    topic: "Progression & Locking",
    question: "If someone clicks on a locked lesson, what will the website display?",
    answer: "If someone clicks on a locked lesson, the website will display a warning screen with the prerequisite module."
  },
  {
    id: 3,
    num: "03",
    topic: "Quiz Passing Rule",
    question: "Will the next lesson unlock if a learner scores four out of five on the quiz?",
    answer: "Yes, it will. If a learner scores four or five correct answers, the platform will immediately unlock the next lesson."
  },
  {
    id: 4,
    num: "04",
    topic: "Pronunciation Audio",
    question: "If you open the Examples section and click on the speaker icon, what will happen?",
    answer: "If you click on the speaker icon, the system will play the native pronunciation of the sentence in English."
  },
  {
    id: 5,
    num: "05",
    topic: "Stage 1 Foundations",
    question: "What will a beginner learn if they complete Stage 1 on this website?",
    answer: "If a beginner completes Stage 1, they will learn basic sentence structure (SVO), personal pronouns, and the verb To Be in the present tense."
  },
  {
    id: 6,
    num: "06",
    topic: "Quiz Feedback",
    question: "If a user chooses an incorrect answer in the quiz, will the platform explain why?",
    answer: "Yes, it will. If a user chooses an incorrect answer, the platform will highlight the correct option and will explain the grammar rule."
  },
  {
    id: 7,
    num: "07",
    topic: "First Conditional Theory",
    question: "If you finish Lesson 22, will you know how to talk about future possibilities?",
    answer: "Yes, if you finish Lesson 22, you will know how to combine 'If' with 'will' to talk about realistic future situations."
  },
  {
    id: 8,
    num: "08",
    topic: "Keyboard Hotkeys",
    question: "What will happen if a user presses the keys A, B, C, or D during a quiz?",
    answer: "If a user presses keys A, B, C, or D on their keyboard, the quiz will select the answer instantly."
  },
  {
    id: 9,
    num: "09",
    topic: "Portfolio Integration",
    question: "If I add this interactive platform to my portfolio, how will it help my career?",
    answer: "If you add this platform to your portfolio, it will demonstrate both your frontend web development skills and your English communication abilities."
  },
  {
    id: 10,
    num: "10",
    topic: "Daily Practice",
    question: "Will students improve their fluency if they practice on this website every day?",
    answer: "Yes, they will. If students practice on this website every day, they will build a strong habit and will achieve great fluency in English."
  }
];

const VideoSection = ({ onBackToLessons }) => {
  const [videoSource, setVideoSource] = useState(() => {
    return localStorage.getItem("portfolio_video_url") || "";
  });
  const [videoType, setVideoType] = useState(() => {
    return localStorage.getItem("portfolio_video_type") || "none"; // 'file' | 'url' | 'none'
  });
  const [urlInput, setUrlInput] = useState("");
  const [activeAudioId, setActiveAudioId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const fileInputRef = useRef(null);

  // Manejo de carga de archivo local
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const blobUrl = URL.createObjectURL(file);
      setVideoSource(blobUrl);
      setVideoType("file");
    }
  };

  // Manejo de URL externa (YouTube o enlace directo)
  const handleApplyUrl = (e) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    let processedUrl = urlInput.trim();
    // Convertir enlace de YouTube estándar a enlace embebido
    if (processedUrl.includes("youtube.com/watch?v=")) {
      const videoId = processedUrl.split("v=")[1]?.split("&")[0];
      if (videoId) {
        processedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
    } else if (processedUrl.includes("youtu.be/")) {
      const videoId = processedUrl.split("youtu.be/")[1]?.split("?")[0];
      if (videoId) {
        processedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
    }

    setVideoSource(processedUrl);
    setVideoType("url");
    localStorage.setItem("portfolio_video_url", processedUrl);
    localStorage.setItem("portfolio_video_type", "url");
    setUrlInput("");
  };

  const handleResetVideo = () => {
    setVideoSource("");
    setVideoType("none");
    localStorage.removeItem("portfolio_video_url");
    localStorage.removeItem("portfolio_video_type");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSpeak = (text, id) => {
    setActiveAudioId(id);
    speakEnglish(
      text,
      () => setActiveAudioId(id),
      () => setActiveAudioId(null)
    );
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <article className="video-section">
      {/* ─── Header de la Sección ─── */}
      <header className="video-hero">
        <div className="video-meta-row">
          <span className="video-badge badge-evidence">
            <SparklesIcon size={13} /> TAREA DE INGLÉS • EVIDENCIA ORAL
          </span>
          <span className="video-badge badge-grammar">
            GRAMMAR: FIRST CONDITIONAL
          </span>
          <span className="video-badge badge-count">
            10 QUESTIONS & ANSWERS
          </span>
        </div>

        <h2 className="video-hero-title">First Conditional — Oral Presentation Video</h2>
        <p className="video-hero-sub">
          Esta sección está dedicada a la presentación en video de la tarea de inglés. Aquí se sube y visualiza el video respondiendo las 10 preguntas formuladas en Primer Condicional sobre la plataforma.
        </p>

        <div className="video-hero-actions">
          {onBackToLessons && (
            <button className="video-back-btn" onClick={onBackToLessons}>
              ← Volver a las lecciones del curso
            </button>
          )}
        </div>
      </header>

      {/* ─── Área del Reproductor / Subida de Video ─── */}
      <section className="video-player-container">
        <div className="player-card">
          {videoType === "none" || !videoSource ? (
            <div className="upload-placeholder">
              <div className="upload-icon-circle">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <h3>Espacio para tu Video de Evaluación</h3>
              <p>
                Sube el archivo de tu video grabado respondiendo las preguntas en inglés o pega el enlace de YouTube / Drive donde lo subiste.
              </p>

              <div className="upload-options">
                <label className="upload-file-btn">
                  📁 Seleccionar archivo de video (.mp4, .webm)
                  <input 
                    type="file" 
                    accept="video/*" 
                    onChange={handleFileUpload} 
                    ref={fileInputRef}
                    className="sr-only" 
                  />
                </label>

                <div className="upload-divider">
                  <span>o pega un enlace</span>
                </div>

                <form className="upload-url-form" onSubmit={handleApplyUrl}>
                  <input
                    type="url"
                    placeholder="https://www.youtube.com/watch?v=... o enlace de video"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    className="url-input"
                  />
                  <button type="submit" className="url-submit-btn">
                    Incrustar Video
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="video-active-wrapper">
              <div className="video-player-frame">
                {videoType === "file" ? (
                  <video controls className="html5-video" src={videoSource} autoPlay>
                    Tu navegador no soporta la reproducción de video HTML5.
                  </video>
                ) : (
                  <iframe
                    src={videoSource}
                    title="First Conditional Video Presentation"
                    className="embed-iframe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              <div className="video-control-bar">
                <span className="video-status-text">
                  <CheckCircleIcon size={16} className="text-success" /> Video cargado correctamente
                </span>
                <button className="change-video-btn" onClick={handleResetVideo}>
                  Cambiar / Eliminar video
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── Las 10 Preguntas y Respuestas en Primer Condicional ─── */}
      <section className="qa-section">
        <div className="qa-section-header">
          <div className="qa-header-left">
            <TargetIcon size={22} className="qa-icon" />
            <div>
              <h3>Questions & Answers Guide (100% English)</h3>
              <p>Las 10 preguntas y respuestas del video estructuradas con el Primer Condicional.</p>
            </div>
          </div>
          <span className="qa-formula-pill">
            Formula: If + Present Simple, will + base verb
          </span>
        </div>

        <div className="qa-grid">
          {firstConditionalQA.map((item) => {
            const isPlayingQ = activeAudioId === `q-${item.id}`;
            const isPlayingA = activeAudioId === `a-${item.id}`;
            const isCopied = copiedId === item.id;

            return (
              <article key={item.id} className="qa-card">
                <div className="qa-card-top">
                  <span className="qa-num">QUESTION {item.num}</span>
                  <span className="qa-topic-tag">{item.topic}</span>
                  <button 
                    className={`qa-copy-btn ${isCopied ? 'copied' : ''}`}
                    onClick={() => handleCopy(`Q: ${item.question}\nA: ${item.answer}`, item.id)}
                    title="Copiar pregunta y respuesta"
                  >
                    {isCopied ? "✓ Copiado" : "Copiar"}
                  </button>
                </div>

                <div className="qa-question-block">
                  <span className="qa-role-badge role-question">Question</span>
                  <div className="qa-text-row">
                    <p className="qa-question-text">{item.question}</p>
                    <button
                      className={`qa-audio-btn ${isPlayingQ ? 'playing' : ''}`}
                      onClick={() => handleSpeak(item.question, `q-${item.id}`)}
                      title="Escuchar pronunciación de la pregunta"
                      aria-label="Escuchar pregunta"
                    >
                      <Volume2Icon size={16} />
                    </button>
                  </div>
                </div>

                <div className="qa-answer-block">
                  <span className="qa-role-badge role-answer">Model Answer</span>
                  <div className="qa-text-row">
                    <p className="qa-answer-text">{item.answer}</p>
                    <button
                      className={`qa-audio-btn ${isPlayingA ? 'playing' : ''}`}
                      onClick={() => handleSpeak(item.answer, `a-${item.id}`)}
                      title="Escuchar pronunciación de la respuesta"
                      aria-label="Escuchar respuesta"
                    >
                      <Volume2Icon size={16} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </article>
  );
};

export default VideoSection;
