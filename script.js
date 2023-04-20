const createListButton = document.getElementById('create-list-button');
const listContainer = document.querySelector('.list-container');
const leftArrowButton = document.getElementById('left-arrow');
const rightArrowButton = document.getElementById('right-arrow');

let listCount = 0;
createListButton.addEventListener('click', () => {
  const listNameInput = document.getElementById('list-name-input');
  const listTitle = listNameInput.value ? listNameInput.value : `List ${listCount+1}`;
  const listId = `list-${listCount+1}`;
  const newList = document.createElement('div');
  newList.classList.add('list');
  newList.id = listId;
  newList.innerHTML = `
    <div class="list-title">
      <span>${listTitle}</span>
      <button class="delete-list-button">X</button>
    </div>
    <div class="item-list"></div>
    <div>
      <input class="new-item-input" type="text" placeholder="Enter new item">
      <button class="add-item-button">+</button>
    </div>
  `;
  const addItemButton = newList.querySelector('.add-item-button');
  const newItemInput = newList.querySelector('.new-item-input');
  const itemList = newList.querySelector('.item-list');
  const deleteListButton = newList.querySelector('.delete-list-button');

  addItemButton.addEventListener('click', () => {
    const itemText = newItemInput.value;
    if (itemText) {
      const newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.innerHTML = `
        <span class="item-text">${itemText}</span>
        <button class="delete-item-button">X</button>
      `;
      const deleteItemButton = newItem.querySelector('.delete-item-button');
      deleteItemButton.addEventListener('click', () => {
        newItem.remove();
      });
      itemList.appendChild(newItem);
      newItemInput.value = '';
    }
  });

  deleteListButton.addEventListener('click', () => {
    newList.remove();
  });

  listContainer.appendChild(newList);
  listCount++;
  listNameInput.value = '';
});


