import styles from './ResultatEcran.module.css'

function ResultatEcran({ score, totalQuestions, onRestart}) {
    const maxScore = totalQuestions * 10
    const percentage = Math.round((score / maxScore)* 100)

    function getMessage(){
        if (percentage >= 80) return {text: "Excellent !", color:"#2ecc71"}
         if (percentage >= 60) return {text: "Bien joué !", color:"#f39c12"}
         return {text: "Continuer à pratiquer !", color:"#e74c3c"}
    }

    const message = getMessage()

    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.icones}>🎯</div>
                <h1 className={styles.title}>Quiz terminé !</h1>

                <div className={styles.scoreCircle}>
                    <span className={styles.scoreNumber}>{score}</span>
                    <span className={styles.scoreMax}>{maxScore}</span>
                </div>

                <p className={styles.message} style={{color: message.color}}>
                    {message.text}
                </p>
            

            <div className={styles.stats}>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}> {percentage}%</span>
                    <span className={styles.statLabel}> Score </span>
                </div>

                <div className={styles.statItem}>
                    <span className={styles.statNumber}> {Math.round(score / 10)} </span>
                    <span className={styles.statLabel}> Bonnes réponses </span>
                </div>

                <div className={styles.statItem}>
                    <span className={styles.statNumber}>
                       {totalQuestions - Math.round(score / 10)}
                    </span>
                    <span className={styles.statLabel}>Mauvaises réponses</span>
                </div>
            </div>

            <button className={styles.restartBtn} onClick={onRestart}>
                Recommencer
            </button>
        </div>
        </div>
    )
}
export default ResultatEcran

