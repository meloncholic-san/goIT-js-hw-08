import throttle from 'lodash.throttle';console.log('qwqweqweee');

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailForm = form.querySelector('input[name = "email"]');
const messageForm = form.querySelector('textarea[name = "message"]');


function formSaverHandler() {
    const formState = {
        email: emailForm.value,
        message: messageForm.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
};

function submitHandler(event) {
    event.preventDefault();
    console.log('email:', emailForm.value);
    console.log('message:', messageForm.value);
    localStorage.removeItem(STORAGE_KEY);
    form.reset()
}

function loadFormHandler() {
    const formData = localStorage.getItem(STORAGE_KEY);
    if (formData) {
        const { email, message } = JSON.parse(formData);
        emailForm.value = email;
        messageForm.value = message;
    }
}



document.addEventListener('DOMContentLoaded', loadFormHandler);
form.addEventListener('input', throttle(formSaverHandler, 500));
form.addEventListener('submit', submitHandler);
