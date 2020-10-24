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

let secondsLeft = 45;

let questions = [
    {
        question: "Which HTML tag can JavaScript be written in?",
        answers: [
            '<script>',
            '<javascript>',
            '<js>',
            '<style>',
        ]
    },
    {
        question: "Bootstrap is to CSS as _____ is to JavaScript.",
        answers: [
            'java',
            'jQuery',
            'script',
            'html',
        ]
    },
    {
        question: "Array values are placed inside which of the following?",
        answers: [
            '( )',
            '{ }',
            '[ ]',
            '< >',
        ]
    },
    {
        question: "DOM stands for _____.",
        answers: [
            'Drunk On Monday',
            'Data Object Mode',
            'Data Or Media',
            'Document Object Model',
        ]
    },
    {
        question: "Which would you use if you wanted to ask the user to type in their age?",
        answers: [
            'alert()',
            'prompt()',
            'console.log()',
            'confirm()',
        ]
    },
    {
        question: "Which is an example of a boolean?",
        answers: [
            '7',
            'That cow is fat',
            'true',
            '18 cherries',
        ]
    },
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
            var newScore = document.createElement('li')
            newScore.setAttribute('style','list-style-type: none')
            prevScores.appendChild(newScore)
    
            var savedInitial = localStorage.getItem('initials')
    
            newScore.textContent = `${savedInitial} | ${score}`
        })
       
    }
    
    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    
    questionEl.textContent = currentQuestion.question
    
    for (i = 0; i < currentQuestion.answers.length; i++) {
        var ansBtn = document.createElement('button')
        answerEl.appendChild(ansBtn)
        ansBtn.textContent = currentQuestion.answers[i]
        ansBtn.classList.add('btn')
        ansBtn.addEventListener('click', clickAnswer)
          
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
     
    if (clickedBtn.textContent === '<script>') {
        score++
        console.log('right')
    } else if (clickedBtn.textContent === 'jQuery') {
        score++
        console.log('right')
    } else if (clickedBtn.textContent === '[ ]') {
        score++
        console.log('right')
    } else if (clickedBtn.textContent === 'Document Object Model') {
        score++
        console.log('right')
    } else if (clickedBtn.textContent === 'prompt()') {
        score++
        console.log('right')
    } else if (clickedBtn.textContent === 'true') {
        score++
        console.log('right')
    } else {
        console.log('wrong')
        secondsLeft = secondsLeft - 10
    }
    console.log(score)
    nextQuestion()

}

