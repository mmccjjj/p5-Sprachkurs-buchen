let confirmButton= getElementById("confirmButton");
let cancelButton= getElementById("cancelButton");
let courseOutput= document.getElementById("courseOutput");
let dateOutput= document.getElementById("dateOutput");
let usernameOutput= document.getElementById("usernameOutput");
let emailOutput= document.getElementById("emailOutput");
let nameOutput= document.getElementById("nameOutput");
let adressOutput= document.getElementById("adressOutput");
let zipOutput= document.getElementById("zipOutput");
let cityOutput= document.getElementById("cityOutput");
let language= localStorage.getItem("language");
let level= localStorage.getItem("level");
let date= localStorage.getItem("date");
let time= localStorage.getItem("time");
let username= localStorage.getItem("username");
let email= localStorage.getItem("email");
let name= localStorage.getItem("name");
let adress= localStorage.getItem("adress");
let zip= localStorage.getItem("zip");
let city= localStorage.getItem("city");

window.onload = function() {

    courseOutput.innerText= `${language}, ${level}`;
    dateOutput.innerText= `${date} ${time}`;
    usernameOutput.innerText= `${username}`;
    emailOutput.innerText= `${email}`;
    nameOutput.innerText= `${name}`;
    adressOutput.innerText= `${adress}`;
    zipOutput.innerText= `${zip}`;
    cityOutput.innerText= `${city}`;

}

function confirmButton(){
    localStorage.clear
}

function cancelButton(){
    window.location.href = "index.html";
}

confirmButton.addEventListener("click", function(event){
    confirmButton()
});

cancelButton.addEventListener("click", function(event){
    cancelButton()
});