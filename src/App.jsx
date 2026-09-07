// src/App.jsx
import React, { useState, useCallback, useMemo } from 'react'
import { stages, getLessonById, getAllLessons } from './data/lessonsData.js'
import { useLocalStorage } from './hooks/useLocalStorage.js'
import Sidebar from './components/sidebar/Sidebar.jsx'
import LessonView from './components/LessonView/LessonView.jsx'
import ProgressBar from './components/ProgressBar/ProgressBar.jsx'
import './App.css'

function App() {
  const [activeLessonId, setActiveLessonId] = useState('lesson-1')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [progress] = useLocalStorage('englishProgress', { completedLessons: [] })

  const allLessons = useMemo(() => getAllLessons(), [])
  const completedLessons = Array.isArray(progress?.completedLessons) ? progress.completedLessons : []

  // Una lección está desbloqueada si es la primera, o si la anterior ya fue completada y aprobada
  const isLessonUnlocked = useCallback((lessonId) => {
    const index = allLessons.findIndex((l) => l.id === lessonId)
    if (index <= 0) return true
    return completedLessons.includes(allLessons[index - 1]?.id)
  }, [allLessons, completedLessons])

  const getPrerequisiteLesson = useCallback((lessonId) => {
    const index = allLessons.findIndex((l) => l.id === lessonId)
    if (index > 0) return allLessons[index - 1]
    return null
  }, [allLessons])

  const getNextLessonId = useCallback((lessonId) => {
    const index = allLessons.findIndex((l) => l.id === lessonId)
    if (index >= 0 && index < allLessons.length - 1) {
      return allLessons[index + 1].id
    }
    return null
  }, [allLessons])

  const handleSelectLesson = useCallback((lessonId) => {
    setActiveLessonId(lessonId)
    setSidebarOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleNextLesson = useCallback(() => {
    const nextId = getNextLessonId(activeLessonId)
    if (nextId) {
      handleSelectLesson(nextId)
    }
  }, [activeLessonId, getNextLessonId, handleSelectLesson])

  const activeLesson = getLessonById(activeLessonId) || allLessons[0]
  const isCurrentLessonUnlocked = isLessonUnlocked(activeLesson.id)
  const prerequisiteLesson = getPrerequisiteLesson(activeLesson.id)

  const completedCount = completedLessons.length
  const totalLessons = allLessons.length

  return (
    <div className="app">
      <button 
        className="menu-toggle" 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label={sidebarOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={sidebarOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <aside className={`sidebar-wrapper ${sidebarOpen ? 'open' : ''}`}>
        <Sidebar 
          stages={stages} 
          activeLessonId={activeLessonId}
          completedLessons={completedLessons}
          isLessonUnlocked={isLessonUnlocked}
          onSelectLesson={handleSelectLesson}
        />
      </aside>

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <main className="main-content">
        <div className="main-content-inner">
          <header className="top-bar">
            <div className="top-bar-branding">
              <span className="brand-tag">LEARNING PATH</span>
              <h1>English Fluency Platform</h1>
            </div>
            <div className="top-bar-stats">
              <ProgressBar current={completedCount} total={totalLessons} />
            </div>
          </header>

          <LessonView 
            lesson={activeLesson} 
            isUnlocked={isCurrentLessonUnlocked}
            prerequisiteLesson={prerequisiteLesson}
            onSelectLesson={handleSelectLesson}
            onNextLesson={getNextLessonId(activeLesson.id) ? handleNextLesson : null}
            hasNextLesson={Boolean(getNextLessonId(activeLesson.id))}
          />
        </div>
      </main>
    </div>
  )
}

export default App