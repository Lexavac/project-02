//Get Element
const img = document.querySelector('.main-img img');
const toggleBtn = document.querySelector('.toggle');
const toggleText = document.querySelectorAll('.toggle-text');

//toggle variable
let bool = true;    

// change image and text with toggle variable
toggleBtn.addEventListener('click', () => { 
if(bool === true) {
     img.src = "https://res-1.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1632404546/enoxjfdkg1inej7qiht3.png";

toggleText.forEach(text => {
     text.innerText = "White";
});

bool = false;
} else {
     img.src = "https://cdn.shopify.com/s/files/1/1684/4603/products/iphone-13-mini_Midnight.png?v=1650892480";

toggleText.forEach(text => {
     text.innerText = "Black"
});

bool = true;
} 


//toggle theme
document.body.classList.toggle('light-theme');

//Toggle icon
toggleBtn.firstElementChild.classList.toggle("uil-sun");
})



