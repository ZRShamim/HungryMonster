const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayMeal(data.meals))
    .catch(error => displayError('Sorry, your desired food not found.'));
}

// Display Searched Meal
const displayMeal = mealList => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    mealList.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'card-group meal-card';
        mealDiv.innerHTML = `
            <div class="card text-center" onClick="displayIngredients(${meal.idMeal })" data-toggle="modal" data-target="#exampleModal">
                <img class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
                <div class="card-body">
                    <h2 class="textDesign">${meal.strMeal}</h2>
                </div>
            </div>`
            mealContainer.appendChild(mealDiv);
    });
}

// Display Searched Meal Ingredients
let displayIngredients = foodId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ foodId }`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const ingredientList = document.getElementById('ingredientsList');
        ingredientList.innerHTML = '';
        ingredientList.className = 'modal-body text-center';
        ingredientList.innerHTML = `
            <img class="card-img-top img-size" src="${ data.meals[0].strMealThumb }">
            <h3>${ data.meals[0].strMeal }</h3><br>
            <h6> ${ data.meals[0].strIngredient1 }</h6>
            <h6> ${ data.meals[0].strIngredient2 }</h6>
            <h6> ${ data.meals[0].strIngredient3 }</h6>
            <h6> ${ data.meals[0].strIngredient4 }</h6>
            <h6> ${ data.meals[0].strIngredient5 }</h6>
            <h6> ${ data.meals[0].strIngredient6 }</h6>
            <h6> ${ data.meals[0].strIngredient7 }</h6>
            <h6> ${ data.meals[0].strIngredient8 }</h6>
            <h6> ${ data.meals[0].strIngredient9 }</h6>
            <h6> ${ data.meals[0].strIngredient10 }</h6>
            <h6> ${ data.meals[0].strIngredient11 }</h6>
            <h6> ${ data.meals[0].strIngredient12 }</h6>
            <h6> ${ data.meals[0].strIngredient13 }</h6>
            <h6> ${ data.meals[0].strIngredient14 }</h6>
            <h6> ${ data.meals[0].strIngredient15 }</v>
            <h6> ${ data.meals[0].strIngredient16 }</h6>
            <h6> ${ data.meals[0].strIngredient17 }</h6>
            <h6> ${ data.meals[0].strIngredient18 }</h6>
            <h6> ${ data.meals[0].strIngredient19 }</h6>
            <h6> ${ data.meals[0].strIngredient20 }</h6>`
    })
}

const displayError = error => {
    const errorTag = document.getElementById('error-message');
    errorTag.innerText = error;
}