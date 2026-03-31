import styles from './Question.module.css'; 

function Question({
    question,
    options,
    selectedAnswer,
    correctAnswer,
    onAnswer,
    questionNumber,
    totalQuestions,
    timeLeft,
    score
}) {
    function getOptionStyle(option) {
        if (!selectedAnswer) return styles.option
        if (option === correctAnswer) return `${styles.option} ${styles.correct}`
        if (option === selectedAnswer && option !== correctAnswer) {
           return `${styles.option} ${styles.wrong}`
        }
        return styles.option
    }

    return(
        <div className={styles.container}>
            <div className={styles.card}>
                
                <div className={styles.header}>
                    <span className={styles.questionCount}>
                        Question {questionNumber}/{totalQuestions}
                    </span>
                    <span className={styles.score}>Score : {score}</span>
                </div>
                
                <div className={styles.timerBar}>
                    <div className={styles.timerFill} style={{ width: `${(timeLeft/15) * 100}%`}}>

                    </div>
                </div>

                <div className={styles.timeLeft}>
                    ⏱ {timeLeft}s
                </div>

                <h2 className={styles.question}>{question}</h2>

                <div className={styles.options}>
                    {options.map((option) => (
                        <button key={option}
                        className={getOptionStyle(option)}
                        onClick={() => onAnswer(option)}
                        disabled={!!selectedAnswer}>
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Question;