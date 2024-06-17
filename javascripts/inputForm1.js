let text= document.getElementById("test");
let language= localStorage.getItem("language");
let level= localStorage.getItem("level");
let date= localStorage.getItem("date");
let time= localStorage.getItem("time");

if (!language || !level || !date || !time){

    text.innerText= "Please go back and select a course with a specific time and date.";
    toggleElements()
}

else {  
    
    text.innerText= `You would like to book the ${level} ${language} course on the ${date} at ${time}` 
}

const password1= document.getElementById("password");
const password2= document.getElementById("re-password")



password1.addEventListener("input", validatePassword);
password2.addEventListener("input", validatePassword);

function validatePassword(){
    const pw1Value = password1.value;
    const pw2Value = password2.value;

    if (pw1Value === pw2Value) {
        // Passwörter stimmen überein, entferne die Klasse "wrong" von beiden Input-Feldern
        password1.classList.remove("wrong");
        password2.classList.remove("wrong");
    } else {
        // Passwörter stimmen nicht überein, füge die Klasse "wrong" zu beiden Input-Feldern hinzu
        password1.classList.add("wrong");
        password2.classList.add("wrong");
    }
}


function toggleElements() {
    var elements = document.getElementsByClassName("hide");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("hideActiv");
    }
}
