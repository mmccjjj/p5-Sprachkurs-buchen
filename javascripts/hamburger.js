const hamMenu= document.querySelector(".hamburgerMenu");

const hamMenuOff= document.querySelector(".hamburgerOff")

hamMenu.addEventListener("click", () =>{
    hamMenu.classList.toggle("active");
    hamMenuOff.classList.toggle("active");

})

document.addEventListener("click", function(event) {
    const isClickInsideMenu = hamMenu.contains(event.target) || hamMenuOff.contains(event.target);
    if (!isClickInsideMenu) {
        hamMenu.classList.remove("active");
        hamMenuOff.classList.remove("active");
    }
});
