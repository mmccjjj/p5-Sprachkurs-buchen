const americanCities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", 
    "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", 
    "Fort Worth", "Columbus", "San Francisco", "Charlotte", "Indianapolis", "Seattle", 
    "Denver", "Washington", "Boston", "El Paso", "Nashville", "Detroit", 
    "Oklahoma City", "Portland", "Las Vegas", "Memphis", "Louisville", "Baltimore", 
    "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Mesa", 
    "Kansas City", "Atlanta", "Long Beach", "Colorado Springs", "Raleigh", "Miami", 
    "Virginia Beach", "Omaha", "Oakland", "Minneapolis", "Tulsa", "Arlington", 
    "New Orleans", "Wichita", "Cleveland", "Tampa", "Bakersfield", "Aurora", 
    "Honolulu", "Anaheim", "Santa Ana", "Corpus Christi", "Riverside", "Lexington", 
    "St. Louis", "Stockton", "Pittsburgh", "Saint Paul", "Cincinnati", "Anchorage", 
    "Henderson", "Greensboro", "Plano", "Newark", "Lincoln", "Toledo", "Orlando", 
    "Chula Vista", "Irvine", "Fort Wayne", "Jersey City", "Durham", "St. Petersburg", 
    "Laredo", "Buffalo", "Madison", "Lubbock", "Chandler", "Scottsdale", 
    "Glendale", "Reno", "Norfolk", "Winston-Salem", "North Las Vegas", "Irving", 
    "Chesapeake", "Gilbert", "Hialeah", "Garland", "Fremont", "Baton Rouge", 
    "Richmond", "Boise", "San Bernardino"
];
let cityInput= document.getElementById("city");
let zipInput= document.getElementById("zip");
let adressInput= document.getElementById("adress");
let nameInput= document.getElementById("name");
let nextButton= document.getElementById("nextButton");
let backButton= document.getElementById("backButton");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

window.onload = function() {

    const fields = {
        "name": "name",
        "adress": "adress",
        "zip": "zip",
        "city": "city"
    };

    // Schleife durch jedes Schlüsselwort
    for (let key in fields) {
        const value = localStorage.getItem(key);
        if (value) {  // Überprüfen, ob ein Wert vorhanden ist
            document.getElementById(fields[key]).value = value;
        }
    }
};

function checkName(){
    const nameValue= nameInput.value
    const regex= /^[A-Za-zÄäÖöÜüß\-]+(?:\s[A-Za-zÄäÖöÜüß\-]+)+$/;

    if(regex.test(nameValue)){
        nameInput.classList.remove("wrong");
        return true;
    } else{
        nameInput.classList.add("wrong");
        return false;
    }
}

nameInput.addEventListener("input", checkName)

function checkAdress(){
    const adressValue= adressInput.value
    const regex= /^[A-Za-zÄäÖöÜüß]+\s?([A-Za-zÄäÖöÜüß]+\s)?\d+$/;
    
    if (regex.test(adressValue)){
        adressInput.classList.remove("wrong")
        return true;
    } else{
        adressInput.classList.add("wrong")
        return false;
    }
}

adressInput.addEventListener("input", checkAdress);

function checkZip(){
const zipValue= zipInput.value;                                                                                          
    if (zipValue.length === 5){
        zipInput.classList.remove("wrong");
        return true;
    } else{
        zipInput.classList.add("wrong");
        return false;
    }
}

zipInput.addEventListener("input", checkZip);

function checkCity(){
     cityValue= cityInput.value.toLowerCase();

    if (americanCities.some(city => city.toLowerCase() === cityValue)) {
        cityInput.classList.remove("wrong");
        return true;
    } else {
        cityInput.classList.add("wrong");
        return false;
    }
}

cityInput.addEventListener("input", checkCity);


function nextButtonFunction() {
    const cityValid = checkCity();
    const zipValid= checkZip();
    const adressValid= checkAdress();
    const nameValid= checkName();

    if (cityValid&& zipValid&& adressValid&& nameValid){
        localStorage.setItem("city", cityInput.value)
        localStorage.setItem("zip", zipInput.value)
        localStorage.setItem("adress", adressInput.value)
        localStorage.setItem("name", nameInput.value)
        window.location.href = "verify.html";
    }else{
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

nextButton.addEventListener("click", function(event){
    nextButtonFunction()
});

function backButtonFunction() {
    window.history.back();
}

backButton.addEventListener("click", function(event){
    backButtonFunction()
});
