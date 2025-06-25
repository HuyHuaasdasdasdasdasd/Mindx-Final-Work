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

async function getProduct() {
    const result = await getDocs(collection(db, "Thongtin"));
    const products = [];
    console.log(result)
    result.forEach((doc) => {
        products.push({ id : doc.id, ...doc.data()});
    })
    return products;
}
console.log(getProduct())

async function displayProducts(){
    const productList = document.getElementById("row");
    const products = await getProduct();
    
    const first = products[12]
    let title = document.getElementById('title')
    title.innerHTML = first.tit

    let img = document.getElementById('img')
    img.src = first.img1

    let des = document.getElementById('des')
    des.innerHTML = first.des

    products.forEach ((product, index) => {
  if (index === 2 || index === 3) {
    const productDiv = document.createElement("div");

    const customClass = index === 3 ? "custom-style-three" : "custom-style-two";

    productDiv.innerHTML = `
      <div class="col ${customClass}">
      <div class="card" style="width: 30rem; position: relative; top: 6rem;">
        <img src="${product.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.tit}</h5>
          <p class="card-text">${product.des}</p> <br><br>
          <a href="#" class="btn btn-dark thongtinbutton" style="color: white !important;">See More</a>
        </div>
      </div>
    </div>`;
    productList.appendChild(productDiv)

    const ttbtn = productDiv.querySelector(".thongtinbutton");
    ttbtn.addEventListener("click", function () {
        window.location.href = `../thongtin/thongtinmain.html?id=${product.id}`;
       })
      }
    })
  };
displayProducts()

