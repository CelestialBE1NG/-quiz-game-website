document.addEventListener("DOMContentLoaded", () => {
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answerButton");

    let currentQuestionIndex = 0;
    let score = 0;
    const totalQuestions = questions.length;

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
        answerButtons.forEach((button, index) => {
            button.innerText = currentQuestion.answers[index];
            button.onclick = () => handleAnswer(index);
        });
    }

    function handleAnswer(selectedIndex) {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedIndex === currentQuestion.correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuestions) {
            showQuestion();
        } else {
            localStorage.setItem('score', score);
            localStorage.setItem('totalQuestions', totalQuestions);
            window.location.href = 'results.html';
        }
    }
    
    showQuestion();
    });
    
