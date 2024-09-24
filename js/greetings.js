const loginForm = document.querySelector(".login-form")
const loginInput = document.querySelector("form.login-form input");
const welcome = document.querySelector("h1#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onsubmit(tomato){
    tomato.preventDefault();
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY,username)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintWelcome(username)
}

function paintWelcome(username){
    welcome.innerText= `Welcome ${username}`;
    welcome.classList.remove(HIDDEN_CLASSNAME)    
}


const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onsubmit)
} else {
    paintWelcome(savedUsername)
}