document.addEventListener('DOMContentLoaded', function() {
    // Referenzen zu den HTML-Elementen
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
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = mealName;
  cell2.textContent = calories;
  cell1.classList.add('border', 'p-2'); 
  cell2.classList.add('border', 'p-2');

  // Gesamtkalorien aktualisieren
  const currentTotal = parseInt(totalCaloriesElement.textContent.replace('Total: ', ''));
  totalCaloriesElement.textContent = 'Total: ' + (currentTotal + calories);

  // Eingaben zurücksetzen
  mealInput.value = '';
  caloriesInput.value = '';
}

    // Klick-Event-Listener für den "Save"-Button
    saveButton.addEventListener('click', addMeal);
  });