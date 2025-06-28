import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, getDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

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
const db = getFirestore(app);

async function getProducts() {
  const results = await getDocs(collection(db, "Thongtin"));
  const productss = [];

  results.forEach((doc) => {
    productss.push({ id: doc.id, ...doc.data() });
  });

  return productss;
}

async function displayProducts2() {
  const productList = document.getElementById("col");

  const productss = await getProducts(); 

  productss.forEach((product, index) => {
    
      const productDiv2 = document.createElement("div");
      productDiv2.innerHTML = `
        <div class="card text-bg-dark">
          <img src="${product.img}" class="card-img" style="opacity: 0.5;" alt="...">
          <div class="card-img-overlay">
            <h5 class="card-title">${product.tit}</h5>
            <p class="card-text">${product.des}</p>
            <p class="card-text"><small>Last updated 3 mins ago</small></p>
          </div>
        </div>`;

      productList.appendChild(productDiv2);

      productDiv2.addEventListener("click", function () {
        window.location.href = `../thongtin/thongtinmain.html?id=${product.id}`;
      });
  });
}
displayProducts2(); 