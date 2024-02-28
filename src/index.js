document.addEventListener('DOMContentLoaded', function() {

    const mealInput = document.querySelector('input[type="text"]');
    const caloriesInput = document.querySelector('input[type="number"]');
    const saveButton = document.querySelector('.bg-green-500');
    const totalCaloriesElement = document.querySelector('p');

    // Funktion zum Hinzufügen einer Mahlzeit
    function addMeal() {
        const mealName = mealInput.value;
        const calories = parseInt(caloriesInput.value);
        if (!mealName || isNaN(calories)) {
          alert('Bitte geben Sie einen Mahlzeit-Namen und Kalorien ein.');
          return;
        }

    // Tabelle aktualisieren
      const table = document.querySelector('table');
      const row = table.insertRow(-1);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      cell1.textContent = mealName;
      cell2.textContent = calories;

    // Gesamtkalorien aktualisieren
      const totalCalories = parseInt(totalCaloriesElement.textContent.replace('Total: ', '')) + calories;
      totalCaloriesElement.textContent = 'Total: ' + totalCalories;

    // Eingaben zurücksetzen
      mealInput.value = '';
      caloriesInput.value = '';
    }

    // Klick-Event-Listener für den "Save"-Button
    saveButton.addEventListener('click', addMeal);
  });