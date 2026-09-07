import './ProgressBar.css'

const ProgressBar = ({ current, total }) => {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0

  return (
    <div className="progress-wrapper" role="region" aria-label="Progreso del curso">
      <div className="progress-info">
        <span className="progress-label">Progreso del curso</span>
        <span className="progress-fraction">{current} / {total} lecciones</span>
      </div>
      <div className="progress-track">
        <div 
          className="progress-fill" 
          style={{ width: `${percentage}%` }}
          aria-hidden="true"
        />
      </div>
      <span className="progress-percent">{percentage}% completado</span>
    </div>
  )
}

export default ProgressBar