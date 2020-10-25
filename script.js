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

// Score starts at 0
var score = 0

let currentQuestion = 0
let availableQuestions = []

// Total time is 45 seconds
let secondsLeft = 45;

// List of questions and answers
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

// Clicking the start button starts the quiz
startBtn.addEventListener('click', startQuiz)

// Starting the quiz starts the timer and presents the first question
function startQuiz() {
    startBtn.classList.add('hide')
    questionCont.classList.remove('hide')
    availableQuestions = [...questions]
    timer()
    nextQuestion()
    
}

// Timer counts down every 1 second
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

// Presenting the next question resets the answer field
function nextQuestion() {
    reset()
    
    // Shows Final Score page and saves initials
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
    // Displays the questions in a random order
    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    
    questionEl.textContent = currentQuestion.question
    
    // Generates the answer buttons
    for (i = 0; i < currentQuestion.answers.length; i++) {
        var ansBtn = document.createElement('button')
        answerEl.appendChild(ansBtn)
        ansBtn.textContent = currentQuestion.answers[i]
        ansBtn.classList.add('btn')
        ansBtn.addEventListener('click', clickAnswer)
          
    }
    
    // Prevents the question just diplayed from being asked again
    availableQuestions.splice(questionsIndex, 1)
    
}


// Removes the previous answer buttons
function reset() {
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    }
}

// When an answer is clicked, the next question is presented
function clickAnswer(event) {
    let clickedBtn = event.target
    
    // If the correct answer is clicked, score increases by 1
    // If the wrong answer is clicked, time decreases by 10 seconds
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

