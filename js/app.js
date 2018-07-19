(function (w) {
  let shoppingListInstance = new ShoppingList();
  let contentDiv = document.getElementById('content');
  let errorDiv =  document.getElementById('error');
  errorDiv.style.color = 'red';
  errorDiv.style.fontWeight = 'bold';
  let titleTextBox = document.getElementsByName('title');
  let descripTextBox = document.getElementsByName('description');
  let error = false;

  const add_to_shopping_list = function () {
    if(shoppingListInstance.title === ''){
      shoppingListInstance.title = shoppingListInstance.titleElement.value;
      shoppingListInstance.titleElement.value = '';
      shoppingListInstance.titleElement.style.display = 'none';
    }

    let titleInput = titleTextBox[0].value;
    let descriptionInput = descripTextBox[0].value;

    titleTextBox[0].value = '';
    descripTextBox[0].value = '';

    if (typeof titleInput === 'string'
      && typeof descriptionInput === 'string'
      && titleInput !== ''
      && descriptionInput !== '') {
        if(error){
          error = false;
          errorDiv.innerText = '';
        }

      let new_shopping_list_item = new ShoppingListItem(titleInput, descriptionInput);

      shoppingListInstance.addItem(new_shopping_list_item);
      contentDiv.innerHTML = shoppingListInstance.render();
    } else {
      error = true;
      errorDiv.innerText = 'Invalid input please enter a non empty string.';
    }

  }

  const changeCheckedStatus = function (event) {
    let itemProperties = event.target.parentNode.outerText.split(' ');
    let index = -1;

    for (let i = 0; i < shoppingListInstance.items.length; i++) {
      if ((shoppingListInstance.items[i].name === itemProperties[0])
        && (shoppingListInstance.items[i].description === itemProperties[1])) {
        index = i;
      }
    }

    if (index > -1) {
      
      if (shoppingListInstance.items[index].is_done) {
        shoppingListInstance.items[index].uncheck();
      } else {
        shoppingListInstance.items[index].check();
      }
    }
  }

  const removeItemButtonClicked = function (event) {

    let itemProperties = event.target.parentNode.outerText.split(' ');
    let index = -1;

    for (let i = 0; i < shoppingListInstance.items.length; i++) {
      if (shoppingListInstance.items[i].name === itemProperties[0]
        && shoppingListInstance.items[i].description === itemProperties[1]) {
        index = i;
      }
    }

    if (index > -1) {
      shoppingListInstance.removeItem(shoppingListInstance.items[index]);
      contentDiv.innerHTML = shoppingListInstance.render();
    }
  }

  w.add_to_shopping_list = add_to_shopping_list;
  w.changeCheckedStatus = changeCheckedStatus;
  w.removeItemButtonClicked = removeItemButtonClicked;

})(window)