const correctAnswers = ['A', 'A', 'A', 'A'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    // user answers
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // checking user answers with original one
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    console.log(score);

});