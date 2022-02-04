
//const feedbackForm = document.querySelector('.feedback-form');

const input = document.querySelector('input');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');


input.addEventListener('input', localStorageSetter);

function localStorageSetter(event){
    console.log('event', event.target.value);

    localStorage.setItem('email', email.value);
    localStorage.setItem('message', message.value);
}