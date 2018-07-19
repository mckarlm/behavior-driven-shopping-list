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
    let index =-1;

    for(let i=0; i < shoppingListInstance.items.length; i++){
      if((shoppingListInstance.items[i].name === itemProperties[0]) 
      && (shoppingListInstance.items[i].description === itemProperties[1])){
        index = i;
      }
    }

    if(index > 0){
      if (event.target.checked) {
        shoppingListInstance.items[index].check();
      } else {
        shoppingListInstance.items[index].uncheck();
      }
    }
  }

  w.add_to_shopping_list = add_to_shopping_list;
  w.changeCheckedStatus = changeCheckedStatus;

})(window)