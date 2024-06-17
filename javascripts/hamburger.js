const hamMenu= document.querySelector(".hamburgerMenu");

const hamMenuOff= document.querySelector(".hamburgerOff")

hamMenu.addEventListener("click", () =>{
    hamMenu.classList.toggle("active");
    hamMenuOff.classList.toggle("active");

})