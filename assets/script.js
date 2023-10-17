
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


let questions = [
    { question: 'What car seats are compatible with a Nuna stroller?:', 
    choice1 : "1. Almost any brand with the correct adapters.",
    choice2 : "2. UPPAbaby and Nuna Only",
    choice3 : "3. Nuna only",
    choice4 : "4. None of the above ",
    correct: "3"
    },
    { question: "How much does the UPPAbaby Vista weigh?:", 
    choice1 : "1. 32lbs",
    choice2 : "2. 25lbs",
    choice3 : "3. 20lbs",
    choice4 : "4. 27lbs",
    correct: "4"
    },
    { question: "How much does an UPPAbaby bassinet cost with the stand:", 
    choice1 : "1. $500",
    choice2 : "2. $350",
    choice3 : "3. $200",
    choice4 : "4. You cant buy the stand and bassinet without also buying either the Vista or Cruz stroller",
    correct: "2"
    },
    { question: "Cybex is a company based out of ___:", 
    choice1 : "1. The United States",
    choice2 : "2. China",
    choice3 : "3. Germany",
    choice4 : "4. Spain",
    correct: "3"
    },
    { question: "How many pounds can the Vista toddler seat accommodate?", 
    choice1 : "1. 55lbs",
    choice2 : "2. 60lbs",
    choice3 : "3. 35lbs",
    choice4 : "4. 50lbs",
    correct: "4"
    },
    { question: "How long of a warranty does Nuna products have?:", 
    choice1 : "1. 2 years",
    choice2 : "2. 1 year after registered",
    choice3 : "3. 3 years on products over $500",
    choice4 : "4. 3 years",
    correct: "4"
    },
    { question: 'When can you put your baby in the stroller seat?:', 
    choice1 : "1. 6 months",
    choice2 : "2. Developmentally different for each child",
    choice3 : "3. Depends on the type of stroller you have",
    choice4 : "4. Infants can go directly in the stroller after their born",
    correct: "3"
    },
    { question: "How much storage can the Nuna MIXX hold in the storage basket?:", 
    choice1 : "1. 15lbs",
    choice2 : "2. 30lbs",
    choice3 : "3. 20lbs",
    choice4 : "4. 10lbs",
    correct: "4"
    },
    { question: "How long is the bassinet phase?", 
    choice1 : "1. 1 year",
    choice2 : "2. Developmentally different for each child, but typically when they can hold up their own body.",
    choice3 : "3. 3 months.",
    choice4 : "4. Only a couple weeks.",
    correct: "2"
    },
   
]  


intro.style.display = "block";
quiz.style.display = "none";
finalScore.style.display = "none";

let startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startGame);


let timeLeft = 75;
let startScore = 0;
let timer = document.getElementById("timer");

timer.textContent = "Time: " + startScore + "s";

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


function checkAnswer(answer) {
    if(questions[runningQuestionIndex].correct == answer) {
        answerOutput.textContent = "Correct!"
    }
    else {
       answerOutput.textContent = "Wrong!"
       timeLeft -=10;
    }

    if (questions.length === runningQuestionIndex+1) {
        resultRender(); 
        return;
    }
        runningQuestionIndex++;
        renderQuestion();
    };   


function resultRender() {
   quiz.style.display = "none";
   intro.style.display = "none";
   finalScore.style.display = "block";

   if (timeLeft === 0 || questions.length -1) { 
    result.textContent = "Your final score is " + timeLeft + ".";
   }
};


userInfo.addEventListener("click", function() {
    let contactInfo = document.getElementById("contactInfo").value;

    localStorage.setItem("contactInfo", JSON.stringify (contactInfo));
    localStorage.setItem("timeLeft", JSON.stringify(timeLeft));
    
    loadScores();
    });






