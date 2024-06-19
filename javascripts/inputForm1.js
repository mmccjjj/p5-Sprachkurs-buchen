let language= localStorage.getItem("language");
let level= localStorage.getItem("level");
let date= localStorage.getItem("date");
let time= localStorage.getItem("time");
let textDisplay= document.getElementById("text");
let inEmail= document.getElementById("email");
let inUsername= document.getElementById("username");
let inPassword= document.getElementById("password");
let inRePassword= document.getElementById("re-password");
let nextButton= document.getElementById("nextButton");
let backButton= document.getElementById("backButton")
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

window.onload = function() {

    const fields = {
        "username": "username",
        "email": "email"
    };

    // Schleife durch jedes Schlüsselwort
    for (let key in fields) {
        const value = localStorage.getItem(key);
        if (value) {  // Überprüfen, ob ein Wert vorhanden ist
            document.getElementById(fields[key]).value = value;
        }
    }
};

function capitalizeWordsInLocalStorage(keys) {
    keys.forEach(key => {
        let value = localStorage.getItem(key); // Wert aus localStorage holen
        if (value) {
            // Wörter im Wert umformatieren (jedes Wort beginnt mit einem Großbuchstaben)
            let formattedValue = value.split(' ').map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }).join(' ');

            // Formatierter Wert zurück in localStorage speichern
            localStorage.setItem(key, formattedValue);
        }
    });
}


if (!language || !level || !date || !time){

    textDisplay.innerText= "Please go back and select a course with a specific time and date.";
    toggleElements()
}

else {  
    
    textDisplay.innerText= `You would like to book the ${level} ${language} course on the ${date} at ${time}` 
}


function toggleElements() {
    var elements = document.getElementsByClassName("hide");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("hideActiv");
    }
}

function checkEmail() {
    const emailValue= inEmail.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(emailValue)){
        inEmail.classList.remove("wrong");
        return true;
    }else{
        inEmail.classList.add("wrong");
        return false;
    }
}

inEmail.addEventListener("input", checkEmail);

function checkUsername(){
    let usernameValue= inUsername.value;

    if(usernameValue.length< 3){
        inUsername.classList.add("wrong");
        return false;
    } else{
        inUsername.classList.remove("wrong");
        return true;
    }
}

inUsername.addEventListener("input",checkUsername)

function checkPassword() {
    let pw1Value = inPassword.value;
    let pw2Value = inRePassword.value;

    if (pw1Value.length >= 6 && pw2Value.length >= 6){
          
            if (pw1Value === pw2Value) {
                inPassword.classList.remove("wrong");
                inRePassword.classList.remove("wrong");
                return true;
            } else {
                inPassword.classList.add("wrong");
                inRePassword.classList.add("wrong");
                return false;
               }

    }else {
        inPassword.classList.add("wrong");
        inRePassword.classList.add("wrong");
        return false;
        }
}

inPassword.addEventListener("input", checkPassword);
inRePassword.addEventListener("input", checkPassword);


function backButtonFunction() {
    window.history.back();
}

backButton.addEventListener("click", function(event){
    backButtonFunction()
});

function nextButtonFunction(){
    const usernameValid= checkUsername();
    const emailValid= checkEmail();
    const passwordValid= checkPassword();

    if (usernameValid&& emailValid&& passwordValid){
        localStorage.setItem("username", inUsername.value);
        localStorage.setItem("email", inEmail.value);
        window.location.href = "inputForm2.html";
    } else{
        modal.style.display = "block";
    }
} 
    
span.onclick = function() {
    modal.style.display = "none";
}
    
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

nextButton.addEventListener("click", function(event){
     nextButtonFunction()   
});

