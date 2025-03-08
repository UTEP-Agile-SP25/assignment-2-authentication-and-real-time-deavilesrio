import { login, logout, signUp } from "./auth"


const signUpForm = document.querySelector("#signupForm")
signUpForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const firstName=document.getElementById("firstName").value
    const lastName=document.getElementById("lastName").value
    const signupEmail=document.getElementById("signupEmail").value
    const signupPassword=document.getElementById("signupPassword").value
    signUp(firstName, lastName, signupEmail, signupPassword)
})

const loginForm = document.querySelector("#loginForm")
loginForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const loginEmail=document.getElementById("LoginEmail").value
    const loginPassword=document.getElementById("LoginPassword").value
    login(loginEmail, loginPassword)
})
const logOutForm = document.querySelector("#logoutForm")
logOutForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    logout()
})
