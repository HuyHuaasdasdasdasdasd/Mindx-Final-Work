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


async function getProductById() {
    const params = new URLSearchParams(window.location.search)
    const productId = params.get("id");
    const productRef = doc(db, "Thongtin", productId);
    const productSnap = await getDoc(productRef);
  
    if (productSnap.exists()) {
        return {id: productSnap.id, ...productSnap.data() };
    } else {
        console.error ("Item not found!");
        return null;
    }
}
async function displayProductDetail() {
    const product = await getProductById();
    if (product) {
        document.getElementById ("product-detail").innerHTML = `
        <h1 class="title">${product.tit}</h1>
        <img src="${product.img}" class="hinh" alt=""> <br><br>
        <p class="text">${product.text}</p>
        `;
    }
}
displayProductDetail()