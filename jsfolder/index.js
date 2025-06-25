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
        window.location.href = `../thongtin/thongtinside.html?id=${product.id}`;
      });
    }
  });
}
displayProducts2(); 

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
    const first = products[11]
    let title = document.getElementById('title')
    title.innerHTML = first.tit

    let img = document.getElementById('img')
    img.srcset = first.img1

    let des = document.getElementById('des')
    des.innerHTML = first.des

    products.forEach((product, index) => {
  if (index === 5 || index === 0) {
    const productDiv = document.createElement("div");

    const customClass = index === 5 ? "custom-style-zero" : "custom-style-five";

    productDiv.innerHTML = `
      <div class="row ${customClass}">
        <div class="col-6 col-md-4">
          <div class="card" style="width: 37.6rem; position: relative; right: 17rem;">
            <img src="${product.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.tit}</h5>
              <p class="card-text">${product.des}.</p>
              <a href="#" class="btn btn-dark thongtinbutton" style="color: white !important;">Visit here</a>
            </div>
          </div>
        </div>
      </div>`;
    productList.appendChild(productDiv)

    const ttbtn = productDiv.querySelector(".thongtinbutton");
    ttbtn.addEventListener("click", function () {
        window.location.href = `../thongtin/thongtinmain.html?id=${product.id}`;
       })
    title.addEventListener("click", function () {
      window.location.href = `../thongtin/thongtinmain.html?id=${first.id}`;
    })
    des.addEventListener("click", function () {
      window.location.href = `../thongtin/thongtinmain.html?id=${first.id}`;
    })
      }
    })
  };
displayProducts()

let radio = document.getElementById("radio")
radio.addEventListener("click", function () {
  console.log("Rate button clicked");
  alert("Thanks for giving us your opinion");
  prompt("Would you want to express your opinion?");
});
