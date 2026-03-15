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
const homeButton = document.getElementById("home-btn");
const progressBar = document.getElementById("progress");
const prevButton = document.getElementById("prev");
const skipButton = document.getElementById("skip");
const nextQuizButton = document.getElementById("next-quiz-btn");
const resultMessageContainer = document.getElementById("result-info");


const allStages = [
    {
        title: "Level 1: Genin Exam", 
        quiz: [
            { question: "What is Naruto's signature jutsu?", answers: [{ text: "Rasengan", correct: false }, { text: "Shadow Clone", correct: true }, { text: "Chidori", correct: false }, { text: "Fire Ball", correct: false }] },
            { question: "Who is the sensei of Team 7?", answers: [{ text: "Asuma", correct: false }, { text: "Gai", correct: false }, { text: "Kakashi Hatake", correct: true }, { text: "Kurenai", correct: false }] },
            { question: "What village does Naruto live in?", answers: [{ text: "Sunagakure", correct: false }, { text: "Konohagakure", correct: true }, { text: "Kirigakure", correct: false }, { text: "Kumogakure", correct: false }] },
            { question: "Who is the First Hokage?", answers: [{ text: "Tobirama", correct: false }, { text: "Hashirama Senju", correct: true }, { text: "Minato Namikaze", correct: false }, { text: "Hiruzen", correct: false }] },
            { question: "What is the name of the fox inside Naruto?", answers: [{ text: "Shukaku", correct: false }, { text: "Kurama", correct: true }, { text: "Matatabi", correct: false }, { text: "Gyuki", correct: false }] },
            { question: "What is Sakura's last name?", answers: [{ text: "Uchiha", correct: false }, { text: "Hyuga", correct: false }, { text: "Haruno", correct: true }, { text: "Uzumaki", correct: false }] },
            { question: "Who does Naruto want to bring back to the village?", answers: [{ text: "Gaara", correct: false }, { text: "Sasuke Uchiha", correct: true }, { text: "Itachi", correct: false }, { text: "Neji", correct: false }] },
            { question: "What is the rank below Chunin?", answers: [{ text: "Genin", correct: true }, { text: "Jonin", correct: false }, { text: "Anbu", correct: false }, { text: "Kage", correct: false }] },
            { question: "Which eye power belongs to the Hyuga clan?", answers: [{ text: "Sharingan", correct: false }, { text: "Byakugan", correct: true }, { text: "Rinnegan", correct: false }, { text: "Jougan", correct: false }] },
            { question: "What is Naruto's favorite food?", answers: [{ text: "Sushi", correct: false }, { text: "Dango", correct: false }, { text: "Ramen", correct: true }, { text: "Onigiri", correct: false }] }
        ]
    },
    {
        title: "Level 2: Chunin Exam",
        quiz: [
            { question: "Who uses the Shadow Possession Jutsu?", answers: [{ text: "Shikamaru Nara", correct: true }, { text: "Choji", correct: false }, { text: "Ino", correct: false }, { text: "Shino", correct: false }] },
            { question: "Where is the second stage of the Chunin Exam held?", answers: [{ text: "Final Arena", correct: false }, { text: "Forest of Death", correct: true }, { text: "Training Ground 0", correct: false }, { text: "Hokage Office", correct: false }] },
            { question: "What is the name of Gaara's sand defense?", answers: [{ text: "Shield of Shukaku", correct: true }, { text: "Iron Sand", correct: false }, { text: "Gold Sand", correct: false }, { text: "Sand Tsunami", correct: false }] },
            { question: "Which ninja can open the Eight Inner Gates?", answers: [{ text: "Neji", correct: false }, { text: "Rock Lee", correct: true }, { text: "Sasuke Uchiha", correct: false }, { text: "Gaara", correct: false }] },
            { question: "Who killed the Third Hokage?", answers: [{ text: "Itachi", correct: false }, { text: "Orochimaru", correct: true }, { text: "Pain", correct: false }, { text: "Kabuto", correct: false }] },
            { question: "What is the black flame jutsu of the Uchiha?", answers: [{ text: "Tsukuyomi", correct: false }, { text: "Amaterasu", correct: true }, { text: "Susanoo", correct: false }, { text: "Kirin", correct: false }] },
            { question: "Who is the leader of the Akatsuki (initially shown)?", answers: [{ text: "Hidan", correct: false }, { text: "Deidara", correct: false }, { text: "Pain", correct: true }, { text: "Kisame", correct: false }] },
            { question: "What is Tsunade's specialty?", answers: [{ text: "Genjutsu", correct: false }, { text: "Medical Ninjutsu", correct: true }, { text: "Taijutsu", correct: false }, { text: "Fuinjutsu", correct: false }] },
            { question: "Which weapon does Temari use?", answers: [{ text: "Sword", correct: false }, { text: "Giant Fan", correct: true }, { text: "Needles", correct: false }, { text: "Puppet", correct: false }] },
            { question: "Who was the first person to graduate to Chunin in Naruto's class?", answers: [{ text: "Sasuke Uchiha", correct: false }, { text: "Neji", correct: false }, { text: "Shikamaru Nara", correct: true }, { text: "Naruto", correct: false }] }
        ]
    },
    {
        title: "Level 3: Jonin Exam",
        quiz: [
            { question: "What is Minato Namikaze's nickname?", answers: [{ text: "Yellow Flash", correct: true }, { text: "Copy Ninja", correct: false }, { text: "White Fang", correct: false }, { text: "Red Hot Habenero", correct: false }] },
            { question: "Who created the Edo Tensei (Reanimation) jutsu?", answers: [{ text: "Orochimaru", correct: false }, { text: "Tobirama", correct: true }, { text: "Madara", correct: false }, { text: "Kabuto", correct: false }] },
            { question: "What is the real name of the Sage of Six Paths?", answers: [{ text: "Indra", correct: false }, { text: "Asura", correct: false }, { text: "Hagoromo", correct: true }, { text: "Hamura", correct: false }] },
            { question: "Which sword is known as the 'Skin-Shaver'?", answers: [{ text: "Kubikiribocho", correct: false }, { text: "Samehada", correct: true }, { text: "Kusanagi", correct: false }, { text: "Hiramekarei", correct: false }] },
            { question: "Who was the teacher of Jiraiya, Orochimaru, and Tsunade?", answers: [{ text: "Hashirama Senju", correct: false }, { text: "Hiruzen", correct: true }, { text: "Tobirama", correct: false }, { text: "Danzo", correct: false }] },
            { question: "What is the ultimate Susanoo form?", answers: [{ text: "Skeleton", correct: false }, { text: "Armored", correct: false }, { text: "Perfect Susanoo", correct: true }, { text: "Humanoid", correct: false }] },
            { question: "Which clan has the Kotoamatsukami genjutsu?", answers: [{ text: "Hyuga", correct: false }, { text: "Uzumaki", correct: false }, { text: "Uchiha", correct: true }, { text: "Senju", correct: false }] },
            { question: "What is the name of Killer Bee's Tailed Beast?", answers: [{ text: "Son Goku", correct: false }, { text: "Gyuki", correct: true }, { text: "Chomei", correct: false }, { text: "Saiken", correct: false }] },
            { question: "Who was the 'White Fang' of the Leaf?", answers: [{ text: "Kakashi Hatake", correct: false }, { text: "Sakumo Hatake", correct: true }, { text: "Minato Namikaze", correct: false }, { text: "Jiraiya", correct: false }] },
            { question: "What is the final jutsu Naruto and Sasuke used in their last clash?", answers: [{ text: "Rasengan & Chidori", correct: true }, { text: "Rasenshuriken & Kirin", correct: false }, { text: "Bijuu Dama & Susanoo arrow", correct: false }, { text: "Amaterasu & Wind Style", correct: false }] }
        ]
    }
];


let currentStageIndex = 0;
let currentQuizData = allStages[currentStageIndex].quiz;
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;
let isAnswered = [];

totalQuestionsSpan.textContent = currentQuizData.length;
maxScoreSpan.textContent = currentQuizData.length;
// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
prevButton.addEventListener("click", prevQuestion);
homeButton.addEventListener("click", ()=>{
    // Reset semua state dan kembali ke start screen
    currentStageIndex = 0;
    currentQuizData = allStages[currentStageIndex].quiz;
    currentQuestionIndex = 0;
    score = 0;
    isAnswered = [];
    currentQuestionIndex = 0;
    scoreSpan.textContent = 0;
    totalQuestionsSpan.textContent = currentQuizData.length;
    maxScoreSpan.textContent = currentQuizData.length;

    startScreen.classList.add("active");
    quizScreen.classList.remove("active");
    resultScreen.classList.remove("active");
    homeButton.style.display = "none";

});


skipButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < currentQuizData.length - 1){
        currentQuestionIndex++;
        showQuestion(); 
    }
    else{
        showResult();
    }
});
nextQuizButton.addEventListener("click", nextQuiz);


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
    const currentQuestion = currentQuizData[currentQuestionIndex];
    currentQuestionSpan.textContent = currentQuestionIndex+1;
    const progressPercent = ((currentQuestionIndex) / currentQuizData.length) * 100;
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
    
    if(currentQuestionIndex === currentQuizData.length - 1){
        skipButton.textContent = "Finish";
        skipButton.style.backgroundColor = "#4CAF50";
    }else{
        skipButton.textContent = "Skip";
        skipButton.style.backgroundColor = "#e86b31";
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
            if(currentQuestionIndex < currentQuizData.length){
                showQuestion();
            }else{
                showResult();
            }
        })

        isAnswered[currentQuestionIndex] = true;

    }
    


function showResult(){
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");
    // Reset warna pesan ke default orange
    resultMessage.style.color = "#e86b31";
    resultMessageContainer.classList.remove("fail-theme");


    finalScoreSpan.textContent = score;
    const percentage = (score/currentQuizData.length) * 100;

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
}
if (percentage < 60) {
        // JIKA GAGAL: Sembunyikan Next, Restart tetap di level yang sama
        nextQuizButton.style.display = "none";
        restartButton.textContent = "Try Level " + (currentStageIndex + 1) + " Again";
    } else {
        // JIKA LULUS: Cek apakah masih ada level selanjutnya
        if (currentStageIndex < allStages.length - 1) {
            nextQuizButton.style.display = "inline-block";
            nextQuizButton.textContent = "Next Level: " + allStages[currentStageIndex + 1].title;
            restartButton.textContent = "Restart This Level";
            
        } else {
            // JIKA LULUS STAGE TERAKHIR
            nextQuizButton.style.display = "none";
            resultMessage.textContent = "🎉 MISSION COMPLETE! You are a Hokage!";
            restartButton.textContent = "Play Again from Level 1";
            restartButton.style.backgroundColor = "#4CAF50"; // Warnai hijau sebagai tanda tamat
            restartButton.style.color = "white";
        }
    }

    if(currentStageIndex > 0 && currentStageIndex < (allStages.length - 1)){
    homeButton.style.display = "inline-block";
    }else{
    homeButton.style.display = "none";
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
    restartButton.style.backgroundColor = "transparent";
    restartButton.style.color = "#e67e22";
    restartButton.style.border = "2px solid #e67e22";
    homeButton.style.display = "none";
}

function restartQuiz(){
    resultScreen.classList.remove("active");
    skipButton.textContent = "Skip";
    skipButton.style.backgroundColor = "#e67e22";
    nextQuizButton.style.display = "inline-block";
    resultMessageContainer.classList.remove("fail-theme");
    restartButton.textContent = "Restart Quiz";

    
    if(currentStageIndex >= allStages.length - 1 && (score/currentQuizData.length) * 100 >= 60){
        currentStageIndex = 0;
        currentQuizData = allStages[currentStageIndex].quiz;
        totalQuestionsSpan.textContent = currentQuizData.length;
        maxScoreSpan.textContent = currentQuizData.length;
        
        restartButton.textContent = "Start Over";
        restartButton.style.backgroundColor = "#4CAF50";
        restartButton.style.color = "#fff";
        restartButton.style.border = "none";
        console.log(restartButton.textContent);

    }
    startQuiz();
}


function nextQuiz(){
    if(currentStageIndex < allStages.length - 1){
        currentStageIndex++;
        currentQuestionIndex = 0;
        score = 0;
        scoreSpan.textContent = 0;
        isAnswered = [];
        currentQuizData = allStages[currentStageIndex].quiz;
        totalQuestionsSpan.textContent = currentQuizData.length;
        maxScoreSpan.textContent = currentQuizData.length;
        resultScreen.classList.remove("active");
        quizScreen.classList.add("active");
        showQuestion();
    }else {
        alert("Congratulations! You have finished all Ninja Exams!");
    }
        
    
}

