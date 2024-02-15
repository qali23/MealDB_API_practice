async function wait_meal_data(){
    let meal_data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(res=>res.json())
    
    let meal_ID_div = document.getElementById('mealID');
    let meal_name_div = document.getElementById('mealName');
    let meals_instructions_div = document.getElementById('mealInstructions');

    let meal_ID = `${meal_data.meals[0].idMeal}`;
    let meal_name = `${meal_data.meals[0].strMeal}`;
    let food_info = `${meal_data.meals[0].strInstructions}
    
    `;
    meal_ID_div.textContent += meal_ID;
    meal_name_div.textContent += meal_name;
    meals_instructions_div.textContent += food_info;
}
wait_meal_data();

let mealButton = document.getElementById("new_meal");
mealButton.addEventListener("click", evt =>{
    async function random_meal_data(){
        let meal_data = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res=>res.json())
        
        let meal_ID_div = document.getElementById('RandomMealID');
        let meal_name_div = document.getElementById('RandomMealName');
        let meals_instructions_div = document.getElementById('RandomMealInstructions');

        let meal_ID = `${meal_data.meals[0].idMeal}`;
        let meal_name = `${meal_data.meals[0].strMeal}`;
        let food_info = `${meal_data.meals[0].strInstructions}
        
        `;
        meal_ID_div.innerHTML = meal_ID;
        meal_name_div.innerHTML = meal_name;
        meals_instructions_div.innerHTML = food_info;
    }
    random_meal_data();
});
