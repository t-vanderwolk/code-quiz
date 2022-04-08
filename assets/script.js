// letiable Declarations 
let header = document.getElementById("header");
let intro = document.getElementById("intro");
let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let choices = document.getElementById("choices");
let choice1 = document.getElementById("1");
let choice2 = document.getElementById("2");
let choice3 = document.getElementById("3");
let choice4= document.getElementById("4");
let finalScore= document.getElementById("finalScore");
let endMessage = document.getElementById("endMessage");
let result = document.getElementById("result");
let scoreList = document.getElementById("scorelist");


//The array of questions 
let questions = [
    { question: 'One loop inside the body of another loop is called?:', 
    choice1 : "1. loop in a loop",
    choice2 : "2. double loops",
    choice3 : "3. nested loops",
    choice4 : "4. loopy-loop",
    correct: "3"
    },
    { question: "Arrays in JavaScript can be used to store ________.", 
    choice1 : "1. numbers and strings",
    choice2 : "2. other arrays",
    choice3 : "3. booleans",
    choice4 : "4. all of the above",
    correct: "4"
    },
    { question: "Which one of the choices illustrates the use of a String datatype", 
    choice1 : "1. {}",
    choice2 : "2. 'Taylor'",
    choice3 : "3. 16",
    choice4 : "4. true",
    correct: "2"
    },
    { question: "Boolean values are?:", 
    choice1 : "1. a string",
    choice2 : "2. enclosed in curly brackets",
    choice3 : "3. true or false",
    choice4 : "4. if else statements",
    correct: "3"
    },
    { question: "What symbol is used when assigning a value to a letiable?", 
    choice1 : "1. &",
    choice2 : "2. ()",
    choice3 : "3. for",
    choice4 : "4. =",
    correct: "4"
    },
    { question: "Which of the following is a correctly formatted closing body tag?:", 
    choice1 : "1. <<body>>",
    choice2 : "2. >body<",
    choice3 : "3. <body>",
    choice4 : "4. </body>",
    correct: "4"
    },
]  

//Challenge Page
intro.style.display = "block";
quiz.style.display = "none";
finalScore.style.display = "none";

//letiable for Start Quiz Button
let startBtn = document.getElementById("startBtn");

// Listener Event to write password on click of "Start Quiz" button
startBtn.addEventListener("click", startGame);


// Timer Function Begin
let timeLeft = 75;
let startScore = 0;
let timer = document.getElementById("timer");

timer.textContent = "Time: " + startScore + "s";

// Start Game
function startGame() {
    quiz.style.display = "block";
    question.style.display ="block";
    header.style.display = "block";
    intro.style.display = "none";
    finalScore.style.display = "none";


    let timeInterval = setInterval(function() {
        timer.textContent = "Time:" + timeLeft + "s";
        timeLeft-=1;

        if(timeLeft === 0 || questions.length === runningQuestionIndex+1)  {
            resultRender();
            clearInterval(timeInterval);
            timer.textContent = "Time:" + timeLeft + "s";
         }
    }, 1000);

    renderQuestion();
};

// Display Questions 
let lastQuestionIndex = questions.length -1;
let runningQuestionIndex = 0;    

function renderQuestion() {
    let q = questions[runningQuestionIndex];
    question.innerHTML = q.question;
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;
};

// Check Answers
function checkAnswer(answer) {
    if(questions[runningQuestionIndex].correct == answer) {
        answerOutput.textContent = "Correct!"
    }
    else {
       answerOutput.textContent = "Wrong!"
       timeLeft -=10;
    }

    if (questions.length === runningQuestionIndex+1) {
        resultRender(); // If it has gone through all questions, show final score
        return;
    }
        runningQuestionIndex++;
        renderQuestion();
    };   

//Score Quiz
function resultRender() {
   quiz.style.display = "none";
   intro.style.display = "none";
   finalScore.style.display = "block";

   if (timeLeft === 0 || questions.length -1) { 
    result.textContent = "Your final score is " + timeLeft + ".";
   }
};

//Capture Score and Initials 
userInfo.addEventListener("click", function() {
    let contactInfo = document.getElementById("contactInfo").value;

    localStorage.setItem("contactInfo", JSON.stringify (contactInfo));
    localStorage.setItem("timeLeft", JSON.stringify(timeLeft));
    
    loadScores();
    });






