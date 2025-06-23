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

let button = document.querySelector("button");
button.addEventListener("click", async (event) => {
    event.preventDefault();

    let a = document.querySelector(".nam").value;
    let text = document.querySelector(".text").value;
    let img = document.querySelector(".img").value;
    let des = document.querySelector(".des").value;

    console.log(a, text, img);

    const docRef = await addDoc(collection(db, "Thongtin"), {
        tit: a,
        text: text,
        img: img,
        des: des
    });

    alert("Products added successfully with ID: " + docRef.id);
    window.location.reload();
});


// <-------------------------------Delete-------------------------------> //
async function getProduct() {
    const result = await getDocs(collection(db, "Thongtin"));
    const products = [];
    console.log(result)
    result.forEach((doc) => {
        products.push({ id : doc.id, ...doc.data()});
    })
    return products;
}
getProduct().then(console.log);

async function displayProducts(){
    const productList = document.getElementById("product-list");

    const products = await getProduct();

    products.forEach((product) =>{
        const productDiv = document.createElement("div");
        productDiv.classList.add("border")
        productDiv.innerHTML = `
        <div class="product-item">
            <h1 class="name">${product.tit}</h1>
            <img class="img" style="width: 3rem;" src="${product.img}">
            <p class="price">${product.des}</p>
            <button class="delete" data-id='${product.id}'>Delete</button>
        </div>`;

        const deleteButton = productDiv.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            const productId = deleteButton.getAttribute("data-id")
            deleteProduct(productId);
        })
        productList.appendChild(productDiv)
    })
}
displayProducts()

async function deleteProduct(productId){
    await deleteDoc (doc(db, "Thongtin", productId));
    alert("Product deleted successfully");
    window.location.reload();
}