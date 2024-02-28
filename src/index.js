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
