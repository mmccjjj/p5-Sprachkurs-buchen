
  let languages = document.getElementById("languages");
  let level = document.getElementById("level");
  let date = document.getElementById("date");
  let time = document.getElementById("time");
  let startButton = document.getElementById("startbutton");

  window.addEventListener('pageshow', function(event) {
    var historyTraversal = event.persisted || 
                           (typeof window.performance != 'undefined' && 
                                window.performance.navigation.type === 2);
    if (historyTraversal) {
      
      window.location.reload(true);
    }
  });
  
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

  function capitalizeWordsInLocalStorage(keys) {
    keys.forEach(key => {
        let value = localStorage.getItem(key);
        if (value) {
            
            let formattedValue = value.split(' ').map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }).join(' ');

            localStorage.setItem(key, formattedValue);
        }
    });
}

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

  function updateOptions() {
    let selectedValueLanguages = languages.value;
    let selectedValueLevel = level.value;
    
  
    if (optionsData[selectedValueLanguages] && optionsData[selectedValueLanguages][selectedValueLevel]) {
      updateDateDropdown(selectedValueLanguages, selectedValueLevel);
      updateTimeDropdown(selectedValueLanguages, selectedValueLevel);
    }
    }


  
  
  languages.addEventListener("change", updateOptions);
  level.addEventListener("change", updateOptions);
  

  function startButtonFunction(){
  localStorage.setItem("language", languages.value);
  localStorage.setItem("level", level.value);
  localStorage.setItem("date", date.value);
  localStorage.setItem("time", time.value);
  let keysToUpdate = ["language", "level"];
  capitalizeWordsInLocalStorage(keysToUpdate);
  }

  startButton.addEventListener("click", function() {
    startButtonFunction();
    window.location.href = "inputForm1.html";
    });
  


  