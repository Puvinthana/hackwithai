let score = 0;
let num1, num2;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    document.getElementById('question').textContent = `${num1} + ${num2} = ?`;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').textContent = '';
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = num1 + num2;
    const feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        score += 1;
        feedback.textContent = 'Correct! Well done!';
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = `Incorrect. The correct answer was ${correctAnswer}`;
        feedback.className = 'feedback incorrect';
    }

    document.getElementById('score').textContent = `Score: ${score}`;
    setTimeout(generateQuestion, 1500);
}

// Generate first question when page loads
document.addEventListener('DOMContentLoaded', generateQuestion); 