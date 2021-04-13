const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
  const ingredientsList = document.querySelector('#ingredients')
  console.log(ingredientsList);
  
  const ingredientsEl = (ingredient) => {
    const itemOfIngredientsList = document.createElement('li');
    itemOfIngredientsList.classList.add('ingredients-list__item');
    itemOfIngredientsList.textContent = `${ingredient}`;
    
    return ingredientsList.appendChild(itemOfIngredientsList);
  }
  
  ingredients.map(ingredientsEl);