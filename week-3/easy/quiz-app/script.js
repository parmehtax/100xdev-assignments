// Importing quizData from data.js
import { quizData } from './data.js';

let currentQuestion = 0;
let score = 0;
let answers = [];

// Load the first question when the page loads
window.onload = loadQuestion;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsBox = document.getElementById('options-box');
    // Load current question and options from quizData
    questionElement.innerText = quizData[currentQuestion].question;
    // Load the options (a, b, c, d)
    optionsBox.innerHTML = `
        <div>
            <input type="radio" name="option" value="a" id="optionA">
            <label for="optionA">${quizData[currentQuestion].a}</label>
        </div>
        <div>
            <input type="radio" name="option" value="b" id="optionB">
            <label for="optionB">${quizData[currentQuestion].b}</label>
        </div>
        <div>
            <input type="radio" name="option" value="c" id="optionC">
            <label for="optionC">${quizData[currentQuestion].c}</label>
        </div>
        <div>
            <input type="radio" name="option" value="d" id="optionD">
            <label for="optionD">${quizData[currentQuestion].d}</label>
        </div>
    `;

    // Set progress bar
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = ((currentQuestion + 1) / quizData.length) * 100 + '%';

    // Show/Hide navigation buttons
    document.getElementById('prev').style.display = currentQuestion === 0 ? 'none' : 'inline-block';
    document.getElementById('next').style.display = currentQuestion === quizData.length - 1 ? 'none' : 'inline-block';
    document.getElementById('submit').style.display = currentQuestion === quizData.length - 1 ? 'inline-block' : 'none';
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    saveAnswer();
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function saveAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        answers[currentQuestion] = selectedOption.value;
    }
}

function submitQuiz() {
    saveAnswer();
    calculateResult();
    showResult();
}

function calculateResult() {
    score = 0;
    quizData.forEach((question, index) => {
        if (answers[index] === question.correct) {
            score++;
        }
    });
}

function showResult() {
    document.querySelector('.quiz-container').classList.add('hidden');
    const resultBox = document.getElementById('result-box');
    resultBox.classList.remove('hidden');
    const resultText = `You answered ${score} out of ${quizData.length} questions correctly.`;
    document.getElementById('result').innerText = resultText;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answers = [];
    document.querySelector('.quiz-container').classList.remove('hidden');
    document.getElementById('result-box').classList.add('hidden');
    loadQuestion();
}

window.nextQuestion = nextQuestion;
window.prevQuestion = prevQuestion;
window.submitQuiz = submitQuiz;
window.restartQuiz = restartQuiz;