let text= document.getElementById("test");
let language= localStorage.getItem("language");
let level= localStorage.getItem("level");
let date= localStorage.getItem("date");
let time= localStorage.getItem("time");
let inEmail= document.getElementById("email");
let inUsername= document.getElementById("username");
let inPassword= document.getElementById("password");
let inRePassword= document.getElementById("re-password");
let nextButton= document.getElementById("nextButton");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

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

function validatePassword() {
    let pw1Value = password1.value;
    let pw2Value = password2.value;

    if (pw1Value.length >= 6 && pw2Value.length >= 6){
            // Überprüfung auf Gleichheit der Passwörter
            if (pw1Value === pw2Value) {
                password1.classList.remove("wrong");
                password2.classList.remove("wrong");
            } else {
                password1.classList.add("wrong");
                password2.classList.add("wrong");
               }

            }else {
                // Markierung hinzufügen, wenn Passwort zu kurz ist
                inPassword.classList.add("wrong");
                inRePassword.classList.add("wrong");
            }
        }



function toggleElements() {
    var elements = document.getElementsByClassName("hide");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("hideActiv");
    }
}


function goBack() {
    window.history.back();
}

function validateEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById('email');

    emailInput.addEventListener("input", function() {
    validateForm(emailInput);
    });

    function validateForm(input) {
        if (validateEmail(input.value)) {
                input.classList.remove("wrong");
     } else {
                input.classList.add("wrong");
            }
            }
    });

    inUsername.addEventListener("input",checkUsername)

    function checkUsername(){
        let usernameValid= inUsername.value;

        if(usernameValid.length< 3){
            inUsername.classList.add("wrong");
        } else inUsername.classList.remove("wrong");
    }

    nextButton.addEventListener("click", function(event) {
    
        if (nextButtonFunction()) {
            window.location.href = "inputForm2.html"; 
        }else{
            modal.style.display = "block";
        }
    });

    span.onclick = function() {
        modal.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

    function nextButtonFunction() {
        const emailValid = validateEmail(inEmail.value);
        let pw1Value = inPassword.value;
        let pw2Value = inRePassword.value;
        let usernameValid= inUsername.value;

        if(!usernameValid || usernameValid.length< 3){
            inUsername.classList.add("wrong");
        } else inUsername.classList.remove("wrong");
    
        // Validierung der E-Mail-Adresse und Markierung des E-Mail-Felds
        if (!emailValid) {
            inEmail.classList.add("wrong");
        } else {
            inEmail.classList.remove("wrong");
        }
    
        // Validierung der Passwörter und Markierung der Passwort-Felder
        // Überprüfung, ob Passwortfelder leer sind
        if (pw1Value.length >= 6 && pw2Value.length >= 6) {
            // Überprüfung auf Gleichheit der Passwörter
            if (pw1Value === pw2Value) {
                inPassword.classList.remove("wrong");
                inRePassword.classList.remove("wrong");
            } else {
                inPassword.classList.add("wrong");
                inRePassword.classList.add("wrong");
            }}
        else {
                // Markierung hinzufügen, wenn Passwort zu kurz ist
                inPassword.classList.add("wrong");
                inRePassword.classList.add("wrong");
            }

    
    
        // Speichern der Daten im LocalStorage oder Alert auslösen
        if (emailValid && (pw1Value === pw2Value) && (pw1Value.trim() !== '' && pw2Value.trim() !== '')) {
            localStorage.setItem("username", inUsername.value);
            localStorage.setItem("email", inEmail.value);
        } else {
            modal.style.display = "block";
        }
        return emailValid && (pw1Value === pw2Value) && (pw1Value.length >= 6 && pw2Value.length >= 6) && (usernameValid && usernameValid.length >= 3);
    }
    

