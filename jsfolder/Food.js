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
    let first = products[7]
    let title_first = document.getElementById('title_first')
    title_first.innerHTML = first.tit

    let img_first = document.getElementById('img_first')
    img_first.srcset = first.img

    let des_first = document.getElementById('description_first')
    des_first.innerHTML = first.des

products.forEach((product,index) =>{
  if (index === 4 || index === 17) {
    const productDiv = document.createElement("div");
      productDiv.innerHTML = `
        <div class="row">
          <div class="col-6 col-md-4"><div class="card" style="width: 37.6rem; position: relative; right: 19rem;">
            <img src="${product.img}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${product.tit}</h5>
                <p class="card-text">${product.des}.</p>
                <a href="#" class="btn btn-dark thongtinbutton" style="color: white !important;">Visit here</a>                </div>
              </div>
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
  }
displayProducts()


async function getProducts() {
  const results = await getDocs(collection(db, "Side"));
  const productss = [];

  results.forEach((doc) => {
    productss.push({ id: doc.id, ...doc.data() });
  });

  return productss;
}

async function displayProducts2() {
  const productSideList = document.getElementById("sidenews");

  const productss = await getProducts(); 

  productss.forEach((product, index) => {
    if (index >= 0) {
      const productDiv2 = document.createElement("div");
      productDiv2.innerHTML = `
        <div class="row g-0 card" style="max-width: 500px; max-height: 190px;">
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
