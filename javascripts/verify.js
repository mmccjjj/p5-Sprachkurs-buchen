let confirmButton= document.getElementById("confirmButton");
let cancelButton= document.getElementById("cancelButton");
let thx= document.getElementById("thx");
let text= document.getElementById("text");
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

    if (!language&& !level&& !date&& !time&& !username&& !email&& !name&& !adress&& !zip&& !city){

            thx.classList.remove("hideActiv");
            text.classList.add("hideActiv");
            confirmButton.classList.add("hideActiv");
            cancelButton.classList.add("hideActiv");

        }else{
            thx.classList.add("hideActiv");
            text.classList.remove("hideActiv");
            courseOutput.innerText= `${language}, ${level}`;
            dateOutput.innerText= `${date} ${time}`;
            usernameOutput.innerText= `${username}`;
            emailOutput.innerText= `${email}`;
            nameOutput.innerText= `${name}`;
            adressOutput.innerText= `${adress}`;
            zipOutput.innerText= `${zip}`;
            cityOutput.innerText= `${city}`;
        }

}

function confirmButtonFunction(){
    localStorage.clear()
    location.reload()
}

function cancelButtonFunction(){
    localStorage.clear()
    window.location.href = "index.html";
}

confirmButton.addEventListener("click", function(event){
    confirmButtonFunction()
});

cancelButton.addEventListener("click", function(event){
    cancelButtonFunction()
});