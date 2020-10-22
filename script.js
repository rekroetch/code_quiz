var startBtn = document.querySelector('#start-btn')
var questionCont = document.querySelector("#question-container")
var questionEl = document.querySelector('#question')
var answerEl = document.querySelector('#answer-btns')
var timeEl = document.querySelector('#timer')

var score = 0
let currentQuestion, currentQuestionIndex



let secondsLeft = 60;

startBtn.addEventListener('click', startQuiz)

function startQuiz() {
    startBtn.classList.add('hide')
    questionCont.classList.remove('hide')
    currentQuestion = questions.sort()
    currentQuestionIndex = 0
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
      alert('timed out');
    }

  }, 1000);
}


function nextQuestion(currentQuestionIndex) {
    reset()
    questionEl.textContent = questions[0].question

    for (i = 0; i < questions[0].answers.length; i++) {
        var ansBtn = document.createElement('button')
        answerEl.appendChild(ansBtn)
        ansBtn.textContent = questions[0].answers[i].ans
        ansBtn.classList.add('btn')
        ansBtn.addEventListener('click', clickAnswer)
        
        // WORKS BUT NOT WHAT I WANT
        if (questions[0].answers[i].correct) {
            console.log('true')
        } else {
            console.log('false')
        }
    }
    
}

// clickedBtn.textContent === "answer 1"

function reset() {
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    }
}


function clickAnswer(event) {
    var clickedBtn = event.target
    
    // WILL ONLY WORK FOR Q1
    if (clickedBtn = questions[0].answers[i].correct) {
        score++
    } else {
        console.log('false')
        secondsLeft = secondsLeft - 10
    }
    console.log(score)
    nextQuestion()
}


var questions = [
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
            {ans: 'answer 2', correct: true},
            {ans: 'answer', correct: false},
            {ans: 'answer', correct: false},
            {ans: 'answer', correct: false},
        ]
    },
    {
        question: "third question",
        answers: [
            {ans: 'answer 3', correct: true},
            {ans: 'answer', correct: false},
            {ans: 'answer', correct: false},
            {ans: 'answer', correct: false},
        ]
    },
    {
        question: "fourth question",
        answers: [
            {ans: 'answer 4', correct: true},
            {ans: 'answer', correct: false},
            {ans: 'answer', correct: false},
            {ans: 'answer', correct: false},
        ]
    }
]












































/*
var questions = document. querySelector("#questions")
var answers = document.querySelector("#answers")
var realanswer = document.querySelector('#realanswer')
var fakeanswers = document.querySelector('#fakeanswers')
var box = document.querySelector('#alert')
var correct = 0

// make object/array with paired questions and answers
var question1 = {
    q1: "This is question 1.",
    a1fake: [
        "fake answer 1",
        "fake answer1",
        "fake answer_1",
    ],
    a1real: "real answer 1",
}

var question2 = {
    q2: "This is question 2.",
    a2fake: [
        "fake answer2",
        "fake answer 2",
        "fake answer_2",
    ],
    a2real: "real answer 2",
}

var realLi = document.createElement('div')
realanswer.appendChild(realLi)
realLi.setAttribute('style', 'border-style: solid', 'border-width: 1px',)


function firstQuestion() {
    // displays q1
    questions.textContent = question1.q1
    
                // // displays a1 in list CANT USE JQUERY!!!
                // $.each(question1.a1fake, function(i, val){
                //     $('#answers').append('<button>'+val+'</button>'+'<br></br>');
                // });
        
        // DISPLAYS Q1 ANSWERS
        realLi.textContent = question1.a1real
        
        for (i = 0; i < question1.a1fake.length; i++) {
            var fakeLi = document.createElement('div')
            fakeanswers.appendChild(fakeLi)
            fakeLi.textContent = question1.a1fake[i]
            fakeLi.setAttribute('style', 'border-style: solid', 'border-width: 1px',)
        }
    
    answers.addEventListener('click', function(event){
        event.stopPropagation()
        box.textContent = "wrong. try again"
        // add time penalty
    })
    
    realanswer.addEventListener('click', function(event){
        event.stopPropagation()
        event.target.matches('real answer')
        box.textContent = "correct";
        correct++
        // document.querySelector('.container').style.display = "none";

        // ON CLICK DISPLAYS Q2 AND ANSWERS2
        questions.textContent = question2.q2
        
        // var realLi = document.createElement('div')
        // realanswer.appendChild(realLi)
        realLi.textContent = question2.a2real
        // realLi.setAttribute('style', 'border-style: solid', 'border-width: 1px',)
        
        // document.querySelector("#fakeanswers").style.display = "none";
        for (i = 0; i < question2.a2fake.length; i++) {
            var fakeLi = document.createElement('div')
            fakeanswers.appendChild(fakeLi)
            fakeLi.textContent = question2.a2fake[i]
            fakeLi.setAttribute('style', 'border-style: solid', 'border-width: 1px',)
        }
    })
    
    
}
firstQuestion()


function secondQuestion() {
    // displays q2
    //     // need line break but this doesnt work
    //     var lineBreak = document.createElement('br')
        
    

    // // displays a2 in list CANT USE JQUERY!!!
    // $.each(question2.a2fake, function(i, val){
    //     $('#answers').html('<button>'+val+'</button>'+'<br></br>');
        
    // });

    // var realLi = document.createElement('button')
    // realanswer.htmlChild(realLi)
    // realLi.textContent = question2.a2real
    
}
secondQuestion()



// $('#answers').hover(function() {
//     $(this).css("background-color: white");
    
// }, function() {
//     $(this).css("background-color: green");

// })

                // var allQuestions = [
                //     question1 = {
                //         q1: "This is question 1.",
                //         a1fake: [
                //             "fake answer",
                //             "fake answer",
                //             "fake answer",
                //         ],
                //         a1real: "real answer",
                //     },

                //     question2 = {
                //         q2: "This is question 2.",
                //         a2fake: [
                //             "fake answer",
                //             "fake answer",
                //             "fake answer",
                //         ],
                //         a2real: "real answer",
                //     },
                // ]


                // function displayQuestions() {
                //     // displays q1
                //     questions.textContent = allQuestions[0].q1

                //     // displays a1 in list CANT USE JQUERY!!!
                //     $.each(allQuestions[0].a1fake, function(i, val){
                //         $('#answers').append('<button>'+val+'</button>'+'<br></br>');
                        
                //     });

                //     var realLi = document.createElement('button')
                //     realanswer.appendChild(realLi)
                //     realLi.textContent = allQuestions[0].a1real
                
                // }
                // displayQuestions()

// function nextQ() {
//     if (realanswer) {
//         allQuestions++
//         console.log("next")
//     }
// }
// nextQ()



// var question2 = {
//     q2: "This is question 2.",
//     a2: [
//         "fake answer",
//         "fake answer",
//         "fake answer",
//         "real answer",
//     ]
// }



        // for (var i = 0; i < allQuestions.length; i++) {
            
        // }

// console.log(allQuestions[0].q1)

// use index to cycle through the objects?
        // for (var i = 0; i < qAndA.length; i++) {
        //     console.log(qAndA[i])
        // } 
// create start button with onclick
// make button start timer countdown and present question
// display score when quiz is over
// make input for initials to save score.
*/
