import { useEffect, useState } from "react"
import { questions } from "./donnees/questions"
import EcrandeDemarrage from "./components/Ecran/ecran"
import Question from "./components/Question/Question"
import ResultatEcran from "./components/ResultatEcran/ResultatEcran"


function App() {
  const [gameStatus, setGameStatus] = useState('start')
  const [currentIndex, setCurrentIndex] = useState(0) 
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15)

  useEffect(() =>{
    if(gameStatus !== 'playing') return
    if(selectedAnswer) return
    if(timeLeft === 0){
      goToNextQuestion()
      return
    }

    const timer = setInterval(() =>{
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, gameStatus, selectedAnswer])

  function handleStart(){
    setGameStatus('playing')
  }

  function handleAnswer(option){
     setSelectedAnswer(option)
     if(option === questions[currentIndex].correct){
      setScore((prev) => prev + 10)
     }

     setTimeout(() => {
      goToNextQuestion()
     }, 1500)
  }

  function goToNextQuestion() {
    const nextIndex = currentIndex + 1
    if(nextIndex < questions.length ) {
      setCurrentIndex(nextIndex)
      setSelectedAnswer(null)
      setTimeLeft(15)
    }else{
      setGameStatus('finished')
    }
  }

  function handleRestart() {
    setGameStatus('start')
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setScore(0)
    setTimeLeft(15)
  }

  const currentQuestion = questions[currentIndex]

  return(
    <>
    {gameStatus === 'start' && (
      <EcrandeDemarrage
      onStart={handleStart}
      totalQuestions = {questions.length}
      />
    )}
    {gameStatus === 'playing' && (
      <Question
      question={currentQuestion.question}
      options={currentQuestion.options}
      correctAnswer={currentQuestion.correct}
      selectedAnswer={selectedAnswer}
      onAnswer={handleAnswer}
      questionNumber={currentIndex + 1}
      totalQuestions={questions.length}
      timeLeft={timeLeft}
      score={score}
      />
    )}

    {gameStatus === 'finished' && (
      <ResultatEcran
      score={score}
      totalQuestions={questions.length}
      onRestart={handleRestart}
      />
    )}
    </>
  )

  
}

export default App
