let emailId = document.querySelector('.email');
let password = document.querySelector('.password');

let emailText = document.querySelector('.email-text');
let passwordText = document.querySelector('.password-text');


let logInBtn = document.querySelector('.login-button');
logInBtn.addEventListener('click', () => {
    if(emailId.value === 'deepak0103gupta@gmail.com' && password.value === '12345'){
        window.location.href = 'discord.html';
    }else {
        emailText.style.color = "red";
        passwordText.style.color = "red";
    }
})