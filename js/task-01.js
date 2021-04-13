const categories = document.querySelector('#categories');
console.log(`В списке ${categories.children.length} категории.`);

const itemsOfCategories = categories.querySelectorAll('.item');

itemsOfCategories.forEach(item => {
    const itemTitle = item.firstElementChild;
    console.log(`Категория: ${itemTitle.textContent}`);

    const SubList = item.lastElementChild;
    const subListItem = SubList.querySelectorAll('li');
    console.log(`Количество элементов: ${subListItem.length}`);
})
