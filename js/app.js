(function (w) {
  let shoppingListInstance = new ShoppingList();
  let contentDiv = document.getElementById('content');

  const add_to_shopping_list = function () {
    let titleInput = document.getElementsByName('title')[0].value;
    let descriptionInput = document.getElementsByName('description')[0].value;
    let new_shopping_list_item = new ShoppingListItem(titleInput, descriptionInput);
    shoppingListInstance.addItem(new_shopping_list_item);
    contentDiv.innerHTML = shoppingListInstance.render();
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
    
    for (let i = 0; i < shoppingListInstance.items.length; i++){
      if (shoppingListInstance.items[i].name === itemProperties[0] && shoppingListInstance.items[i].description === itemProperties[1]){
        index = i;
      }
    }

   
    shoppingListInstance.removeItem(shoppingListInstance.items[index]);
    console.log(shoppingListInstance.items)
    contentDiv.innerHTML = shoppingListInstance.render(); 

  }
   

  w.add_to_shopping_list = add_to_shopping_list;
  w.changeCheckedStatus = changeCheckedStatus;
  w.removeItemButtonClicked = removeItemButtonClicked;

})(window)