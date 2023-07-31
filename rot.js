const imgecontainerEl = document.querySelector(".img-container");
const prevEl = document.getElementById("prev");
const NextEl = document.getElementById("Next");
let x = 0;
let timer


prevEl.addEventListener("click", ()=>{
    x = x + 45;
    clearTimeout(timer)
    updateGallery();
});

NextEl.addEventListener('click', ()=>{
    x = x - 45;
    clearTimeout(timer)
    updateGallery();
});


function updateGallery() {
    imgecontainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
   timer = setTimeout(()=>{
        x = x -45
        updateGallery()
    }, 3000)
}

updateGallery();