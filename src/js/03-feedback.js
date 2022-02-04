import throttle from 'lodash.throttle';

 const STORAGE_KEY = 'feedback-form-state';


const refs = {
    form: document.querySelector('.feedback-form'),
   // textarea: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('[name="email"]'),
    message: document.querySelector('[name="message"]')
  };
  
  refs.form.addEventListener('submit', onFormSubmit);
  //refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));
  refs.form.addEventListener('input', onTextareaInput);
  refs.email.addEventListener('input', throttle(onEmailInput, 200));
  refs.message.addEventListener('input', throttle(onMessageInput, 200));

  function onFormSubmit(e){
      e.preventDefault();
    
      console.log('send out the form')
  }

  function onEmailInput(e) {
    const emailStorage = e.target.value;
  
    localStorage.setItem(STORAGE_KEY, emailStorage);
  }

  function onMessageInput(){
    const messageStorage = e.target.value;
  
    localStorage.setItem(STORAGE_KEY, messageStorage);
  }
 

