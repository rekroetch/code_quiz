var startBtn = document.querySelector('#start-btn')
var questionCont = document.querySelector("#question-container")
var questionEl = document.querySelector('#question')
var answerEl = document.querySelector('#answer-btns')
var timeEl = document.querySelector('#timer')
var scorePage = document.querySelector('#scorePage')
var finalScore = document.querySelector('#score')
var initials = document.querySelector('#initials')
var submit = document.querySelector('#submit')
var prevScores = document.querySelector('#prevScores')

var score = 0

let currentQuestion = 0
let availableQuestions = []

let secondsLeft = 60;

// MIGHT NOT NEED THE 'correct:' ANYMORE
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
        scorePage.classList.remove('hide')
        finalScore.textContent = `Final Score: ${score}`
        submit.addEventListener('click', function(event) {
            event.preventDefault()
            localStorage.setItem('initials', initials.value)
        })

        // prevScores.textContent = `${initials.value} | ${score}`
        console.log(initials.value)

        var newScore = document.createElement('li')
        newScore.setAttribute('style','list-style-type: none')
        prevScores.appendChild(newScore)

        var savedInitial = localStorage.getItem('initials')

        newScore.textContent = `${savedInitial} | ${score}`
        
    }
    
    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    
    questionEl.textContent = currentQuestion.question
    
    for (i = 0; i < currentQuestion.answers.length; i++) {
        var ansBtn = document.createElement('button')
        answerEl.appendChild(ansBtn)
        ansBtn.textContent = currentQuestion.answers[i].ans
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
    let clickedBtn = event.target
    // clickedBtn = currentQuestion.answers.correct
    
     
    if (clickedBtn.textContent === 'answer 1' || 'answer 2' || 'answer 3' || 'answer 4') {
        score++
        console.log('right')
    } else {
        console.log('wrong')
        secondsLeft = secondsLeft - 10
    }
    console.log(score)
    nextQuestion()
}

