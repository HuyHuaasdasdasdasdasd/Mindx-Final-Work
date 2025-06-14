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
    const result = await getDocs(collection(db, "Outside"));
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
    let first = products[0]
    let title_first = document.getElementById('title_first')
    title_first.innerHTML = first.tit

    let second = products[0]
    let img_first = document.getElementById('img_first')
    img_first.srcset = second.img

    let third = products[0]
    let des_first = document.getElementById('description_first')
    des_first.innerHTML = third.des


     products.forEach((product,index) =>{
        const productDiv = document.createElement("div");
        if(index !== 0){
            productDiv.innerHTML = `
             <div class="col-6 col-md-4"><div class="card" style="width: 37.6rem;">
                <img src="${product.img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${product.tit}</h5>
                  <p class="card-text">${product.des}.</p>
                  <a href="#" class="btn btn-dark" id="thongtinbutton" style="color: white !important;">Visit here</a>
                </div>
              </div>
            </div>`;
            productList.appendChild(productDiv)

            const thongTinButton = document.getElementById('thongtinbutton')
            thongTinButton.addEventListener("click", function () {
              window.location.href = `../thongtin/thongtin20.html?id=${product.id}`
            })
        }
    })
}
displayProducts()

async function deleteProduct(productId){
    await deleteDoc (doc(db, "Products", productId));
    alert("Product deleted successfully");
    window.location.reload();
}

