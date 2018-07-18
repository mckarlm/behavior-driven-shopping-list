(function(w){
  let shoppingListInstance = new ShoppingList();
  let itemRender = shoppingListInstance.render();

  contentDiv = document.getElementById('content');
  contentDiv.innerHTML = itemRender;

  const add_to_shopping_list = function(){
    let titleInput = document.getElementsByName('title').innerHTML;
    let descriptionInput = document.getElementsByName('description').innerHTML;
    let new_shopping_list_item = new ShoppingListItem(titleInput, descriptionInput);
    shoppingListInstance.addItem(new_shopping_list_item);
  }
  
  w.addToShoppingList = add_to_shopping_list;
  itemRender = shoppingListInstance.render();
})(window)