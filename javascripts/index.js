document.addEventListener("DOMContentLoaded", function() {
  let languages = document.getElementById("languages");
  let level = document.getElementById("level");
  let date = document.getElementById("date");
  let time = document.getElementById("time");
  let startButton = document.getElementById("startbutton");
  let preventStorageClear = false;
  
  let optionsData = {
  "english": {
  "beginner": { date: ["2024-08-07","2024-08-14","2024-08-21"], time: ["11:00", "15:00","19:00"] },
  "intermediate": { date: ["2024-08-07","2024-08-14","2024-08-21"], time: ["09:00", "11:00","15:00"] },
  "advanced": { date: ["2024-08-02","2024-08-09","2024-08-16"], time: ["07:00", "13:00","19:00"] },
  },
  "french": {
  "beginner": { date: ["2024-08-05","2024-08-12","2024-08-19"], time: ["11:00", "15:00","19:00"] },
  "intermediate": { date: ["2024-08-05","2024-08-12","2024-08-19"], time: ["09:00", "11:00","15:00"] },
  "advanced": { date: ["2024-08-02","2024-08-09","2024-08-16"], time: ["07:00", "13:00","19:00"] },
  },
  "italian": {
  "beginner": { date: ["2024-08-09","2024-08-16","2024-08-23"], time: ["11:00", "15:00","19:00"] },
  "intermediate": { date: ["2024-08-09","2024-08-16","2024-08-23"], time: ["09:00", "11:00","15:00"] },
  "advanced": { date: ["2024-08-02","2024-08-09","2024-08-16"], time: ["07:00", "13:00","19:00"] },
  },
  };
  
  // Eventlistener für Änderungen in den Dropdowns
  languages.addEventListener("change", updateOptions);
  level.addEventListener("change", updateOptions);
  
  startButton.addEventListener("click", function() {
  preventStorageClear = true;
  startButtonFunction();
  window.location.href = "inputForm1.html";
  });
  
  // Funktion zum Laden der Optionen basierend auf gespeicherten Daten
  function loadOptionsFromStorage() {
  let storedLanguage = localStorage.getItem("language");
  let storedLevel = localStorage.getItem("level");
  let storedDate = localStorage.getItem("date");
  let storedTime = localStorage.getItem("time");
  

  // Setze die gespeicherten Werte in die Dropdowns
  if (storedLanguage && storedLevel && storedDate && storedTime &&
      optionsData[storedLanguage] && optionsData[storedLanguage][storedLevel]) {
    // Sprache setzen
    languages.value = storedLanguage;
  
    // Level setzen
    level.value = storedLevel;
  
    // Datum-Optionen aktualisieren
    updateDateDropdown(storedLanguage, storedLevel, storedDate);
  
    // Zeit-Optionen aktualisieren
    updateTimeDropdown(storedLanguage, storedLevel, storedTime);
  } else {
    // Wenn LocalStorage leer ist, setze die Placeholder
    setPlaceholderForDate();
    setPlaceholderForTime();
  }
  }
  
  // Lade die Optionen beim Laden der Seite
  loadOptionsFromStorage();
  
  // Funktion zum Speichern der Daten im LocalStorage
  function startButtonFunction(){
  localStorage.setItem("language", languages.value);
  localStorage.setItem("level", level.value);
  localStorage.setItem("date", date.value);
  localStorage.setItem("time", time.value);
  }
  
  // Funktion zum Aktualisieren der Dropdown-Optionen für Datum
  function updateDateDropdown(selectedLanguage, selectedLevel, selectedDate) {
  date.innerHTML = "";
  date.add(new Option("Date", "", true, true));
  date.options[0].disabled = true;
  

  optionsData[selectedLanguage][selectedLevel].date.forEach(function(option) {
    date.add(new Option(option, option));
  });
  
  if (selectedDate) {
    date.value = selectedDate;
  }
  }
  
  // Funktion zum Aktualisieren der Dropdown-Optionen für Zeit
  function updateTimeDropdown(selectedLanguage, selectedLevel, selectedTime) {
  time.innerHTML = "";
  time.add(new Option("Time", "", true, true));
  time.options[0].disabled = true;
  

  optionsData[selectedLanguage][selectedLevel].time.forEach(function(option) {
    time.add(new Option(option, option));
  });
  
  if (selectedTime) {
    time.value = selectedTime;
  }
  }
  
  // Funktion zum Setzen des Placeholders für Datum
  function setPlaceholderForDate() {
  date.innerHTML = "";
  date.add(new Option("Date", "", true, true));
  date.options[0].disabled = true;
  }
  
  // Funktion zum Setzen des Placeholders für Zeit
  function setPlaceholderForTime() {
  time.innerHTML = "";
  time.add(new Option("Time", "", true, true));
  time.options[0].disabled = true;
  }
  
  // Funktion zum Aktualisieren der Dropdowns basierend auf Sprache und Level
  function updateOptions() {
  let selectedValueLanguages = languages.value;
  let selectedValueLevel = level.value;
  

  if (optionsData[selectedValueLanguages] && optionsData[selectedValueLanguages][selectedValueLevel]) {
    updateDateDropdown(selectedValueLanguages, selectedValueLevel);
    updateTimeDropdown(selectedValueLanguages, selectedValueLevel);
  } else {
    setPlaceholderForDate();
    setPlaceholderForTime();
  }
  }
  window.addEventListener("beforeunload", function(event) {
  if (!preventStorageClear) {
  localStorage.removeItem("language");
  localStorage.removeItem("level");
  localStorage.removeItem("date");
  localStorage.removeItem("time");
  }
  });
  });