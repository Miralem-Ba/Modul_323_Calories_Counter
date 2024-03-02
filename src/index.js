document.addEventListener('DOMContentLoaded', function() {
  const mealInput = document.querySelector('input[type="text"]');
  const caloriesInput = document.querySelector('input[type="number"]');
  const saveButton = document.querySelector('.bg-green-500');
  const cancelButton = document.querySelector('.bg-red-500'); // Falls verwendet
  const totalCaloriesElement = document.querySelector('p');

  function updateTotalCalories() {
      let total = 0;
      document.querySelectorAll('table tr:not(:first-child)').forEach(row => {
          const calories = parseInt(row.cells[1].textContent || '0', 10);
          total += calories;
      });
      totalCaloriesElement.textContent = 'Total: ' + total;
  }

  function addDeleteButtonFunctionality(button, row) {
      button.addEventListener('click', function() {
          row.remove();
          updateTotalCalories();
      });
  }

  function addMeal() {
      const mealName = mealInput.value.trim();
      const calories = parseInt(caloriesInput.value, 10);
      if (!mealName || isNaN(calories)) {
          alert('Bitte geben Sie einen Mahlzeit-Namen und Kalorien ein.');
          return;
      }

      const table = document.querySelector('table');
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const deleteButton = document.createElement('button');

      cell1.textContent = mealName;
      cell2.textContent = calories;
      deleteButton.textContent = '🗑️';
      deleteButton.classList.add('delete-btn', 'text-red-500', 'hover:text-red-700');
      
      cell1.classList.add('border', 'p-2');
      cell2.classList.add('border', 'p-2');
      cell3.appendChild(deleteButton);
      cell3.classList.add('border', 'p-2');

      addDeleteButtonFunctionality(deleteButton, row);
      updateTotalCalories();

      mealInput.value = '';
      caloriesInput.value = '';
  }

  saveButton.addEventListener('click', addMeal);
});
