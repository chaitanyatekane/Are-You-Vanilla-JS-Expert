const correctAnswers = ['A', 'A', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

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
    
    // when clicking on submit, it should auto scroll to top of page
    scrollTo(0,0);
    result.classList.remove('d-none');

    // animating score while displaying on page
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    }, 10);

});