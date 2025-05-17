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





let form = document.querySelector("form");

function login(e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    if (username === users[i].username && password === users[i].password) {
      alert("Login successful");
      window.location.href = "../index.html";
      return;
    }
  }
  alert("Wrong username or password");
}

form.addEventListener("submit", login);