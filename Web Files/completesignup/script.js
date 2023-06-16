const regbox = document.querySelector(".regbox");
const loginlink = document.querySelector(".login-link");
const regitserlink = document.querySelector(".register-link");

registerlink.addEventListener('click', () => {
    regbox.classList.add('active')
});

loginlink.addEventListener('click', () => {
    regbox.classList.remove('active')
});