// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const prevButton = document.getElementById("prev");
const skipButton = document.getElementById("skip");
const nextQuizButton = document.getElementById("next-quiz-btn");
const resultMessageContainer = document.getElementById("result-info");


const chuninExam = [
    {
        question: "What is the name of the First Hokage who also founded the Hidden Leaf Village (Konoha)?",
        answers: [
            { text: "Tobirama Senju", correct: false },
            { text: "Hashirama Senju", correct: true },
            { text: "Hiruzen Sarutobi", correct: false },
            { text: "Minato Namikaze", correct: false }
        ]
    },
    {
        question: "What is the name of the Tailed Beast (Bijuu) sealed inside Gaara?",
        answers: [
            { text: "Shukaku", correct: true },
            { text: "Kurama", correct: false },
            { text: "Matatabi", correct: false },
            { text: "Gyuki", correct: false }
        ]
    },
    {
        question: "What is the signature Uchiha clan jutsu that produces inextinguishable black flames called?",
        answers: [
            { text: "Tsukuyomi", correct: false },
            { text: "Susanoo", correct: false },
            { text: "Amaterasu", correct: true },
            { text: "Chidori", correct: false }
        ]
    },
    {
        question: "What is the name of the sensei for Team 7 (Naruto, Sasuke, Sakura)?",
        answers: [
            { text: "Asuma Sarutobi", correct: false },
            { text: "Kurenai Yuhi", correct: false },
            { text: "Might Guy", correct: false },
            { text: "Kakashi Hatake", correct: true }
        ]
    },
    {
        question: "Where did the final battle between Naruto and Sasuke take place?",
        answers: [
            { text: "Forest of Death", correct: false },
            { text: "Valley of the End", correct: true },
            { text: "Mount Myoboku", correct: false },
            { text: "Hidden Sound Village", correct: false }
        ]
    },
    {
        question: "What is the name of the powerful technique used by the Third Hokage, Hiruzen Sarutobi, to summon the Monkey King Enma?",
        answers: [
            { text: "Summoning Jutsu", correct: false },
            { text: "Enma's Transformation", correct: false },
            { text: "Monkey King Enma's Summoning", correct: true },
            { text: "Shadow Clone Jutsu", correct: false }
        ]
    },
    {
        question: "What is the name of the powerful technique used by the Fourth Hokage, Minato Namikaze, to teleport instantly to any location?",
        answers: [
            { text: "Flying Thunder God Technique", correct: true },
            { text: "Rasengan", correct: false },
            { text: "Chidori", correct: false },
            { text: "Shadow Clone Jutsu", correct: false }
        ]
    },
    {
        question: "When did Naruto can use Kurama mode for the first time?",
        answers: [
            { text: "During the battle with Pain", correct: false },    
            { text: "During the battle with Sasuke at the Valley of the End", correct: true },
            { text: "During the battle with Orochimaru", correct: false },
            { text: "During the battle with the Akatsuki", correct: false }
        ]
    }


];

let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;
let isAnswered = [];

totalQuestionsSpan.textContent = chuninExam.length;
maxScoreSpan.textContent = chuninExam.length;
// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
prevButton.addEventListener("click", prevQuestion);
skipButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < chuninExam.length - 1){
        currentQuestionIndex++;
        showQuestion(); 
    }
    else{
        showResult();
    }
});



function prevQuestion(){
    if(currentQuestionIndex > 0){
        currentQuestionIndex--;
        showQuestion();
    }else{
        alert("This is the first question!");
    }
}

function showQuestion(){
    answerDisabled = false;
    const currentQuestion = chuninExam[currentQuestionIndex];
    currentQuestionSpan.textContent = currentQuestionIndex+1;
    const progressPercent = ((currentQuestionIndex) / chuninExam.length) * 100;
    progressBar.style.width = progressPercent + "%";
    questionText.textContent = currentQuestion.question;

    // answers
    answersContainer.innerHTML = "";
    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answers-btn");
        // what is dataset?
        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);
        answersContainer.appendChild(button);
    });
    
    if(currentQuestionIndex === chuninExam.length - 1){
        skipButton.textContent = "Finish";
        skipButton.style.backgroundColor = "#4CAF50";
    }
    // prev navigation buttons
    if(currentQuestionIndex === 0 || isAnswered[currentQuestionIndex - 1] === true){
        prevButton.style.display = "none";
    }else{
        prevButton.style.display = "block";
    }
}

    function selectAnswer(event){
        // optimizationcheck
        if(answerDisabled) return
        answerDisabled = true;

        const selectedButton = event.target;
        const isCorrect = selectedButton.dataset.correct === "true";

        // jawaban 
        [...answersContainer.children].forEach((button) => {
            if (button.dataset.correct === "true"){
                button.classList.add("correct");
            }else if(button === selectedButton){
                button.classList.add("incorrect");
            }
            button.disabled = true;

        });
        if(isCorrect){
            score++;
            scoreSpan.textContent = score;
        }
        setTimeout(()=>{
            currentQuestionIndex++;
            // check if there are more questions or the quiz is over
            if(currentQuestionIndex < chuninExam.length){
                showQuestion();
            }else{
                showResult();
            }
        },1000)

        isAnswered[currentQuestionIndex] = true;

    }
    


function showResult(){
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = score;
    const percentage = (score/chuninExam.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
    resultMessage.style.color = "#e62222";
    resultMessageContainer.classList.add("fail-theme");
    nextQuizButton.style.display = "none";
  }

}

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;
    isAnswered = [];
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    showQuestion();

}

function restartQuiz(){
    resultScreen.classList.remove("active");
    skipButton.textContent = "Skip";
    skipButton.style.backgroundColor = "#e67e22";
    nextQuizButton.style.display = "inline-block";
    resultMessageContainer.classList.remove("fail-theme");
    startQuiz();
}


