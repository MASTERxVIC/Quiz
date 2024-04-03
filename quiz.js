document.getElementById('submit').addEventListener('click', function() {
    var answers = [];
    var correctAnswers = ['b', 'a','b']; // Correct answers for questions 1,2 & 3

    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');

    if (q1) {
        answers.push(q1.value);
    }
    if (q2) {
        answers.push(q2.value);
    }
    if (q3) {
        answers.push(q3.value);
    }

    var score = 0;
    for (var i = 0; i < answers.length; i++) {
        if (answers[i] === correctAnswers[i]) {
            score++;
        }
    }

    var results = document.getElementById('results');
    results.innerHTML = 'Your score: ' + score + ' out of ' + correctAnswers.length;
});
