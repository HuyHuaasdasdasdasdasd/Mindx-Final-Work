// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
 import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDphUQ2LErimeDlb8DFNeboJO4jBXNc1iY",
  authDomain: "mindxfinal.firebaseapp.com",
  projectId: "mindxfinal",
  storageBucket: "mindxfinal.firebasestorage.app",
  messagingSenderId: "420824719891",
  appId: "1:420824719891:web:20fe00e1d6c84d8f1bd5e6",
  measurementId: "G-88Q3HTC0TK"
};

const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);
const provider = new GoogleAuthProvider();
 let btn = document.getElementById("auth");
 btn.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then ((result) => {
            const user = result.user;
            console.log(user);
            alert("Login successful")
            window.location.href = "../index.html";
      return;
        })    
 })

let form = document.querySelector('form');
let users = [];
function signUp(e) { 
    e.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    if(username.length < 3){
        alert('Username must be at least 3 character');
        return;
    }
    if (password !== confirmPassword) {
        alert('Password does not match');
        return;
    }
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
        for (let i =0; i < users.length; i++) {
            if (username === users[i].username) {
                alert('Username already exists');
                return;
            }
        }
    }
    users.push({
        username: username,
        email: email,
        password: password,
    });
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully');
    window.location.href = '../index.html';
}
form.addEventListener('submit', signUp);

