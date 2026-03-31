import styles from './ecran.module.css';

function EcrandeDemarrage({ onStart, totalQuestions }){
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.icon}>🧠</div>
                <h1 className={styles.title}>Questionnaires</h1>
                <p className={styles.subtitle}>Testez vos connaissances</p>

                <div className={styles.info}>
                    <div className={styles.infoItem}>
                         <span className={styles.infoNumber}>{totalQuestions}</span>
                         <span className={styles.infoLabel}>Questions</span>
                    </div>
                    <div className={styles.infoItem}>
                         <span className={styles.infoNumber}>15s</span>
                         <span className={styles.infoLabel}>Par question</span>
                    </div>
                    <div className={styles.infoItem}>
                         <span className={styles.infoNumber}>10pts</span>
                         <span className={styles.infoLabel}>Par bonne réponse</span>
                    </div>
                </div>

                <button className={styles.startBtn} onClick={onStart}>
                    Commencer le quiz (questionnaire) →
                </button>
            </div>
        </div>
    )
}

export default EcrandeDemarrage;