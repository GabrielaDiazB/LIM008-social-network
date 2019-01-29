// Llamado de elementos 
const signUpQuestion = document.getElementById('signup-question');
const signUp = document.getElementById('sign-up');
const signIn = document.getElementById('sign-in');
const signInArea = document.getElementById('sign-in-box');
const signUpArea = document.getElementById('sign-up-box');
const googleLogIn = document.getElementById('google-login');
const facebookLogIn = document.getElementById('facebook-login');
const logOut = document.getElementById('log-out');
const goBack = document.getElementById('go-back');


goBack.addEventListener('click', () => {
    signInArea.style.display = 'block';
    signUpArea.style.display = 'none';
    signUpQuestion.style.display = 'block';
});