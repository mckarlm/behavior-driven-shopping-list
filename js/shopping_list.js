class ShoppingList {
  constructor() {
    this.items = [];
    this.title = '';
    this.inputForm = document.getElementById('inputForm');
    this.titleElement = document.createElement('input');
    this.titleElement.type = 'text';
    this.titleElement.placeholder = 'List title';
    this.inputForm.insertBefore(this.titleElement,inputForm.firstChild);
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
    // console.log(this.title);
    let liStrings = '';
    for (let i=0; i<this.items.length; i++){
      liStrings = liStrings.concat(this.items[i].render());
    }

    if(liStrings === ''){
      this.title='';
      this.titleElement.style.display='block';
      return '';
    } else {
      return `<h3>${this.title}</h3><ul>${liStrings}</ul>`;
    }
  }
}