class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(shoppingListItem) {
    if (shoppingListItem instanceof ShoppingListItem) {
      this.items.push(shoppingListItem);
    } else {
      throw new TypeError('ShoppingList expected a shoppingListItem'
        + ' to be passed as a parameter.');
    }
  }

  removeItem(shoppingListItem) {
    if (!shoppingListItem) {
      if(this.items.length>0){
        this.items.pop();
      }
    } else if(shoppingListItem instanceof ShoppingListItem && this.items.includes(shoppingListItem)) {
      let index = this.items.indexOf(shoppingListItem);
      this.items.splice(index,1);
    }else {
      throw new TypeError('ShoppingList expected a shoppingListItem'
        + ' to be passed as a parameter.');
    }
  }
}
