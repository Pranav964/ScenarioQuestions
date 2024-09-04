function submitQuiz() {
    const answers = {
        q1: 'All',
        q2: 'Virtual DOM',
        q3:  '1',
        q4: '3'
    };

    let score = 0;
    const form = document.getElementById('quiz-form');

    for (const [question, correctAnswer] of Object.entries(answers)) {
        const selectedOption = form.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswer) {
            score++;
        }
    }

    document.getElementById('result').innerText = `Your score: ${score} / ${Object.keys(answers).length}`;
}
