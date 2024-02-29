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

  // Funktion zum Aktualisieren der Gesamtkalorien
function updateTotalCalories() {
    let total = 0;
    const rows = document.querySelectorAll('table tr:not(:first-child)'); // Alle Zeilen außer der Kopfzeile
    rows.forEach(row => {
      const cells = row.getElementsByTagName('td');
      total += parseInt(cells[1].textContent || '0'); // Summiert die Kalorienwerte jeder Zeile
    });
    document.querySelector('p').textContent = 'Total: ' + total;
  }
  
  // Erweiterte Funktion zum Hinzufügen einer Mahlzeit mit Löschbutton
  function addMeal() {

  // Löschbutton hinzufügen
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '🗑️'; // Emoji als Button-Text
  deleteButton.classList.add('delete-btn', 'text-red-500', 'hover:text-red-700'); // TailwindCSS-Klassen für Styling
  deleteButton.onclick = function() {
    // Entfernt die ganze Zeile aus der Tabelle
    row.remove();
    updateTotalCalories(); // Die Gesamtkalorien aktualisieren
  };
  // Fügen Sie den Button zur Zelle hinzu
  const cell3 = row.insertCell(2);
  cell3.appendChild(deleteButton);
  
  // Gesamtkalorien aktualisieren
  updateTotalCalories();
}