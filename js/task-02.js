const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");
const createNewElement = ingredients.map((item) => {
  const newElement = document.createElement("li");
  newElement.textContent = item;
  return newElement;
});
ingredientsList.append(...createNewElement);