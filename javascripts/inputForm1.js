let text= document.getElementById("test");
let language= localStorage.getItem("language");
let level= localStorage.getItem("level");
let date= localStorage.getItem("date")
let time= localStorage.getItem("time")

if (!language || !level || !date || !time){

    text.innerText= "Please go back and select a course with a specific time and date.";
}

else {  
    
    text.innerText= `You would like to book the ${level} ${language} course on the ${date} at ${time}` 
}
