document.addEventListener("DOMContentLoaded", function() {
    let languages = document.getElementById("languages");
    let level = document.getElementById("level");
    let date = document.getElementById("date");
    let time = document.getElementById("time");
  
    // Beispiel-Datenstruktur, die die Abhängigkeiten speichert
    let optionsData = {
      "english": {
        "beginner": { date: ["2024-08-07","2024-08-14","2024-08-21",], time: ["11:00", "15:00","19:00"] },
        "intermediate": { date: ["2024-08-07","2024-08-14","2024-08-21",], time: ["09:00", "11:00","15:00"] },
        "advanced": { date: ["2024-08-02","2024-08-09","2024-08-16",], time: ["07:00", "13:00","19:00"] },
      },
      "french": {
        "beginner": { date: ["2024-08-05","2024-08-12","2024-08-19",], time: ["11:00", "15:00","19:00"] },
        "intermediate": { date: ["2024-08-05","2024-08-12","2024-08-19",], time: ["09:00", "11:00","15:00"] },
        "advanced": { date: ["2024-08-02","2024-08-09","2024-08-16",], time: ["07:00", "13:00","19:00"] },
      },
      "italian": {
        "beginner": { date: ["2024-08-09","2024-08-16","2024-08-23",], time: ["11:00", "15:00","19:00"] },
        "intermediate": { date: ["2024-08-09","2024-08-16","2024-08-23",], time: ["09:00", "11:00","15:00"] },
        "advanced": { date: ["2024-08-02","2024-08-09","2024-08-16",], time: ["07:00", "13:00","19:00"] },
      },
    };
  
    // Event Listener für Änderungen in d1 und d2
    languages.addEventListener("change", updateOptions);
    level.addEventListener("change", updateOptions);
  
    // Funktion zum Aktualisieren der Optionen in d3 und d4 basierend auf d1 und d2
    function updateOptions() {
      let selectedValueLanguages = languages.value;
      let selectedValueLevel = level.value;
  
      // Prüfen, ob es passende Daten gibt
      if (optionsData[selectedValueLanguages] && optionsData[selectedValueLanguages][selectedValueLevel]) {
        let optionsForDate = optionsData[selectedValueLanguages][selectedValueLevel].date;
        let optionsForTime = optionsData[selectedValueLanguages][selectedValueLevel].time;
  
        // Optionen für d3 aktualisieren
        date.innerHTML = ""; // Alle vorhandenen Optionen löschen
        date.add(new Option("Date", "", true, true));
        date.options[0].disabled = true;

        optionsForDate.forEach(function(option) {
          date.add(new Option(option, option));
        });
  
        // Optionen für d4 aktualisieren
        time.innerHTML = ""; // Alle vorhandenen Optionen löschen
        time.add(new Option("Time", "", true, true));
        time.options[0].disabled = true;

        optionsForTime.forEach(function(option) {
          time.add(new Option(option, option));
        });
      } else {
        date.innerHTML = "";
        date.add(new Option("Date", "", true, true));
        date.options[0].disabled = true; // Placeholder Option deaktivieren
  
        time.innerHTML = "";
        time.add(new Option("Time", "", true, true));
        time.options[0].disabled = true; // Placeholder Option deaktivieren
      }
    }

    // Beim Laden der Seite initial die Optionen setzen
    updateOptions();
  });