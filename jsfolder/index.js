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
  const results = await getDocs(collection(db, "Side"));
  const productss = [];

  results.forEach((doc) => {
    productss.push({ id: doc.id, ...doc.data() });
  });

  return productss;
}

async function displayProducts2() {
  const productSideList = document.getElementById("sidenew");

  const productss = await getProducts(); 

  productss.forEach((product, index) => {
    if (index >= 3) {
      const productDiv2 = document.createElement("div");
      productDiv2.innerHTML = `
        <div class="row g-0 card" style="max-width: 500px; max-height: 190px; margin-bottom: 10px;">
          <div class="col-md-4">
            <img src="${product.img}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${product.tit}</h5>
              <p class="card-text">${product.des}</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      `;

      productSideList.appendChild(productDiv2);

      productDiv2.addEventListener("click", function () {
        window.location.href = `../thongtin/thongtin1.html?id=${product.id}`;
      });
    }
  });
}
displayProducts2(); 
