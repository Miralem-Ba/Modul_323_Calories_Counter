document.addEventListener('DOMContentLoaded', function() {

    const mealInput = document.querySelector('input[type="text"]');
    const caloriesInput = document.querySelector('input[type="number"]');
    const saveButton = document.querySelector('.bg-green-500');
    const totalCaloriesElement = document.querySelector('p');

    
    function addMeal() {
        const mealName = mealInput.value;
        const calories = parseInt(caloriesInput.value);
        if (!mealName || isNaN(calories)) {
          alert('Bitte geben Sie einen Mahlzeit-Namen und Kalorien ein.');
          return;
        }

      const table = document.querySelector('table');
      const row = table.insertRow(-1);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      cell1.textContent = mealName;
      cell2.textContent = calories;

      const totalCalories = parseInt(totalCaloriesElement.textContent.replace('Total: ', '')) + calories;
      totalCaloriesElement.textContent = 'Total: ' + totalCalories;


      mealInput.value = '';
      caloriesInput.value = '';
    }