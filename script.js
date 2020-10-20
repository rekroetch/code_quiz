var questions = document. querySelector("#questions")
var answers = document.querySelector("#answers")

// make object/array with paired questions and answers

        // var qAndA = {
        //     'question1': 'answer1',
        //     'question2': 'answer2',
        //     'question3': 'answer3',
        //     'question4': 'answer4',
        //     'question5': 'answer5',
        //     'question6': 'answer6',
        //     'question7': 'answer7',
        // }

var question1 = {
    q1: "This is question 1.",
    a1: [
        "fake answer",
        "fake answer",
        "fake answer",
        "real answer",
    ]
}

function firstQuestion() {
    // displays q1
    questions.textContent = question1.q1

    // displays a1 in list
    $.each(question1.a1, function(i, val){
        $('#answers').append('<li>'+val+'</li>');
    });
}
firstQuestion()


var question2 = {
    q2: "This is question 2.",
    a2: [
        "fake answer",
        "fake answer",
        "fake answer",
        "real answer",
    ]
}


// use index to cycle through the objects?
        // for (var i = 0; i < qAndA.length; i++) {
        //     console.log(qAndA[i])
        // } 
// create start button with onclick
// make button start timer countdown and present question
// display score when quiz is over
// make input for initials to save score.
