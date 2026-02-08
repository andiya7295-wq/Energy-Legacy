// var firstNumber;
// var secondNumber;
// var globalType;
// var flag = false;
// function calc(numb) {
//     if (flag == true) {
//         document.querySelector("#display").value = '';
//         flag = false;
//     }
//     document.querySelector("#display").value += numb;
//     //document.querySelector("#display").value = document.querySelector("#display").value + numb;
// }
// function oprate(type) {
//     if (type != 'result') {
//         firstNumber =  document.querySelector("#display").value;
//         globalType = type;
//         flag = true;

//     }else{
//         secondNumber =  document.querySelector("#display").value;
//         switch (globalType) {
//             case 'multi':
//                 document.querySelector("#display").value = +firstNumber * +secondNumber;
//                 break;
//                 case 'dec':
//                 document.querySelector("#display").value = +firstNumber - +secondNumber;
//                 break;
//                 case 'inc':
//                 document.querySelector("#display").value = +firstNumber + +secondNumber;
//                 break;

//             default:
//                 break;
//         }
//     }
// }
// function clean() {
//     firstNumber = '';
//     secondNumber = '';
//     globalType = '';
//     document.querySelector("#display").value = '';
// }

// let arr = ["test","ali","ali","ali","ali","ali",];
// // loop
// for (let i = 0 ;i < arr.length ;i++ ){
//     document.querySelector("#content-data").innerHTML += 
//     `<h${i+1}>
//     ${arr[i]}
//     </h${i+1}>`
// }
// var data = [];
// for (let index = 0; index < 5; index++) {
//     data.push(
//         {
//             id: index + 1,
//             title: `title-${index + 1}`,
//             content: `content-${index + 1}`,
//             Image: "assets/img/header.jpg",
//             date: new Date().toLocaleDateString('fa')
//         }
//     )
// }
// function toDoList() {
//     let titleTodo = document.querySelector("#title-todo").value.trim();
//     let contentTodo = document.querySelector("#content-todo").value.trim();
//     let isvalid = true;
//     if (!titleTodo && !contentTodo) {
//         document.querySelector("#title-todo").classList.add("is-invalid");
//         document.querySelector("#content-todo").classList.add("is-invalid");
//         isvalid = false;
//     }
//     if (titleTodo && !contentTodo) {
//         document.querySelector("#title-todo").classList.remove("is-invalid");
//         document.querySelector("#content-todo").classList.add("is-invalid");
//         isvalid = false;
//     }
//     if (!titleTodo && contentTodo) {
//         document.querySelector("#content-todo").classList.remove("is-invalid");
//         document.querySelector("#title-todo").classList.add("is-invalid");
//         isvalid = false;
//     }
//     if (isvalid) {
//         document.querySelector("#content-todo").classList.remove("is-invalid");
//         document.querySelector("#title-todo").classList.remove("is-invalid");
//        let newData = {
//                 id: data.length + 1,
//                 title: titleTodo,
//                 content: contentTodo,
//                 Image: "assets/img/header.jpg",
//                 date: new Date().toLocaleDateString('fa')
//             };
//         data.push(newData);
//         document.querySelector(".data-res").innerHTML +=
//         `
//         <div class="col-lg-3 mb-3">
//     <div class="card">
//   <img src="${newData.Image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${newData.title}</h5>
//     <p class="card-text">
//     ${newData.content}
//     </p>
//     <p>${newData.date}</p>
//   </div>
// </div>
//         </div>
//     `;
//     }
// }

// const httpReq = new XMLHttpRequest();
// httpReq.open("GET", "https://fakestoreapi.com/products");
// httpReq.send();
// httpReq.onload = function () {
//     let data = JSON.parse(this.response);
//     data.forEach(item => {
//         document.querySelector(".data-res").innerHTML +=
//             `
//          <div class="col-lg-3 mb-3">
//      <div class="card">
//    <img src="${item.image}" class="card-img-top" alt="...">
//    <div class="card-body">
//      <h5 class="card-title">${item.title}</h5>
//      <p>price : ${item.price}$</p>
//    </div>
//  </div>
//          </div>
//      `;
//     })
// }

function skeleton(count, col) {
  let item = `
    <div class="col-lg-${col} mb-3">
    <div class="card" aria-hidden="true">
  <div class="placeholder-glow">
    <div class="w-100 placeholder card-img-top"></div>
    </div>
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-12"></span>
      <span class="placeholder col-6"></span>
    </h5>
  </div>
</div>
    </div>
    `;
  for (let index = 1; index <= count; index++) {
    document.querySelector(".res-skeleton").innerHTML += item;
  }
}

async function getData() {
  skeleton(12, 3);
  let fetchData = await fetch("https://fakestoreapi.com/products");
  let res = await fetchData.json();
  document.querySelector('.res-skeleton').remove();
  res.forEach(item => {
    document.querySelector(".data-res").innerHTML +=
      `
         <div class="col-lg-3 mb-3">
     <div class="card">
     <a href="single.html?productid=${item.id}" target="_blank">
   <img src="${item.image}" class="card-img-top" alt="...">
   </a>
   <div class="card-body">
     <h5 class="card-title text-truncate">${item.title}</h5>
     <p>price : ${item.price}$</p>
   </div>
 </div>
         </div>
     `;
  })
}
var resSingle;
async function getDataSingle() {
  let searchData = new URLSearchParams(document.location.search);
  let id = searchData.get('productid');
  skeleton(1, 12);
  let fetchData = await fetch(`https://fakestoreapi.com/products/${id}`);
  resSingle = await fetchData.json();
  document.querySelector("title").innerText = resSingle.title;
  document.querySelector('.res-skeleton').remove();
  document.querySelector(".data-res-single").innerHTML +=
    `
         <div class="col-lg-8 mx-auto mb-3">
     <div class="card">
     <a href="single.html?productid=${resSingle.id}" target="_blank">
   <img src="${resSingle.image}" class="card-img-top" alt="...">
   </a>
   <div class="card-body">
     <h5 class="card-title text-truncate">${resSingle.title}</h5>
     <h3>price : ${resSingle.price}$</h3>
     <p>
     ${resSingle.description}
     </p>
     <p class="badge bg-secondary">${resSingle.category}</p>
     <div class="w-100">
     <button class="btn btn-warning" onclick="addToCart()">add to cart</button>
     </div>
   </div>
 </div>
         </div>
     `;
}
function addToCart() {
  let itemsCart = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
  const toastLiveExample = document.getElementById('liveToast');
  const bodyToast = document.querySelector("#liveToast .toast-body");
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

  let findeItem = itemsCart.find(item => item.id == resSingle.id);
  if (findeItem) {
    toastLiveExample.classList.add("bg-danger");
    bodyToast.innerText = "item exist...";
    toastBootstrap.show();
    return;
  }
  itemsCart.push(resSingle);
   localStorage.setItem("cartItems", JSON.stringify(itemsCart));
  toastLiveExample.classList.add("bg-success");
  bodyToast.innerText = "item added to cart...";
  toastBootstrap.show();
  countItems();
}

// setInterval(() => {
//     document.querySelector(".disabled").innerHTML = new Date().toLocaleTimeString('fa');
// }, 1000);

function countItems() {
  let countData = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')).length : 0;
  document.querySelector("#count-items").innerText = countData;
}
countItems();
var dataCart;
function getDataCart() {
   dataCart = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
  if (dataCart.length) {
    dataCart.forEach(item => {
      document.querySelector(".data-res-cart").innerHTML +=
        `
         <div class="col-lg-12 mb-3">
     <div class="card flex-row position-relative">
     <span id="removeItem" data-id="${item.id}" class="btn-close bg-danger position-absolute rounded-circle p-2 top-0 end-0"></span>
     <a href="single.html?productid=${item.id}" target="_blank" class="col-lg-3">
   <img src="${item.image}" class="card-img-top" alt="...">
   </a>
   <div class="card-body col-lg-9">
     <h5 class="card-title text-truncate">${item.title}</h5>
     <h3>price : ${item.price}$</h3>
     <p class="badge bg-secondary">${item.category}</p>
     <div class="w-100">
     
     </div>
   </div>
 </div>
         </div>
     `;
    });
   

        const removeBtn = document.querySelectorAll('#removeItem');

        removeBtn.forEach(item=>{
          item.addEventListener('click',(ev)=>{
            let idProduct = ev.target.getAttribute("data-id");
            dataCart = dataCart.filter(item=> item.id != idProduct);
            if(!dataCart.length){
              document.querySelector(".data-res-cart").innerHTML = 
    `
    <img src="assets/img/empty.png" width="200" height="200" class="object-fit-contain">
    `
            }
            localStorage.setItem("cartItems", JSON.stringify(dataCart));
            ev.target.parentElement.parentElement.remove();
            countItems();
          })
        })
        
     

  } else {
    document.querySelector(".data-res-cart").innerHTML = 
    `
    <img src="assets/img/empty.png" width="200" height="200" class="object-fit-contain">
    `
  }
}







// function openMenu(){
//     document.querySelector(".menu").classList.toggle('open');
// }