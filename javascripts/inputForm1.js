let text= document.getElementById("test");
let languages= localStorage.getItem("language");
let level= localStorage.getItem("level");
let date= localStorage.getItem("date")
let time= localStorage.getItem("time")

text.innerText= "You would like to book the " + level+ " "+ languages+ " course on the "+ date+ " at "+ time