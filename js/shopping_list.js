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

  render() {
    /*const liStrings = this.items.map(function(item){
      return item.render();
    }).join('');
    console.log(liStrings);*/
    let liStrings = '';
    for (let i=0; i<this.items.length; i++){
      liStrings = liStrings.concat(this.items[i].render());
    }
    return `<ul>${liStrings}</ul>`;
  }
}