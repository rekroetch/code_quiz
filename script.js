var startBtn = document.querySelector('#start-btn')
var questionCont = document.querySelector("#question-container")
var questionEl = document.querySelector('#question')
var answerEl = document.querySelector('#answer-btns')
var timeEl = document.querySelector('#timer')
var finalScore = document.querySelector('#score')
// var user = document.querySelector('#user')

var score = 0

let currentQuestion = 0
let availableQuestions = []

let secondsLeft = 60;


let questions = [
    {
        question: "first question",
        answers: [
            {ans: 'answer 1', correct: true},
            {ans: 'answer', correct: false},
            {ans: 'answer', correct: false},
            {ans: 'answer', correct: false},
        ]
    },
    {
        question: "second question",
        answers: [
            {ans: 'answer', correct: false},
            {ans: 'answer 2', correct: true},
            {ans: 'answer', correct: false},
            {ans: 'answer', correct: false},
        ]
    },
    {
        question: "third question",
        answers: [
            {ans: 'answer', correct: false},
            {ans: 'answer', correct: false},
            {ans: 'answer 3', correct: true},
            {ans: 'answer', correct: false},
        ]
    },
    {
        question: "fourth question",
        answers: [
            {ans: 'answer', correct: false},
            {ans: 'answer', correct: false},
            {ans: 'answer', correct: false},
            {ans: 'answer 4', correct: true},
        ]
    }
]

startBtn.addEventListener('click', startQuiz)

function startQuiz() {
    startBtn.classList.add('hide')
    questionCont.classList.remove('hide')
    availableQuestions = [...questions]
    timer()
    nextQuestion()
    
}

function timer() {
    console.log("started timer")

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      console.log("timed out")
    }

  }, 1000);
}


function nextQuestion() {
    reset()

    if (availableQuestions.length === 0 || secondsLeft === 0) {
        localStorage.setItem('Score', score)
        questionCont.classList.add('hide')
        finalScore.classList.remove('hide')
        finalScore.textContent = `Final Score: ${score}`
        // var person = document.createElement('input')
        // user.appendChild(person)

        // display to screen with input for name
    }

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]

    questionEl.textContent = currentQuestion.question

    for (i = 0; i < currentQuestion.answers.length; i++) {
        var ansBtn = document.createElement('button')
        answerEl.appendChild(ansBtn)
        ansBtn.innerHTML = currentQuestion.answers[i].ans
        ansBtn.classList.add('btn')
        ansBtn.addEventListener('click', clickAnswer)
        

        if (currentQuestion.answers[i].correct) {
            console.log('true')
        } else {
            console.log('false')
        }
    }
    
    availableQuestions.splice(questionsIndex, 1)
}



function reset() {
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    }
}


function clickAnswer(event) {
    var clickedBtn = event.target
    
     
    if (clickedBtn = currentQuestion.answers.correct) {
        score++
    } else {
        console.log('false')
        secondsLeft = secondsLeft - 10
    }
    console.log(score)
    nextQuestion()
}
