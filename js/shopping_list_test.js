'use strict';

const should = chai.should();
const expect = chai.expect;

describe('Test ShoppingListItem class', function () {
  const cart = new ShoppingListItem('grocery', 'This is the grocery list.');
  const toDo = new ShoppingListItem('to do', 'This is a todo list.');
  const wrongName = new ShoppingListItem(0, 'A wrong list');
  const wrongDescription = new ShoppingListItem('name', { name: 'todo' });

  it('should return that ShoppingListItem is a class', function () {

    expect(toDo).to.be.instanceof(ShoppingListItem);
    expect(cart).to.be.instanceof(ShoppingListItem);
    expect(wrongName).to.be.instanceof(ShoppingListItem);
    expect(wrongDescription).to.be.instanceof(ShoppingListItem);
  });

  it('should return that ShoppingListItem is an object', function () {
    toDo.should.be.an('object');
    cart.should.be.an('object');
    wrongName.should.be.an('object');
    wrongDescription.should.be.an('object');
  });

  it('should return that the ShoppingListItem has a property called name', function () {
    expect(cart).has.own.property('name');
    expect(toDo).has.own.property('name');
    expect(wrongName).has.own.property('name');
    expect(wrongDescription).has.own.property('name');
  });

  it('checks that name is a string', function () {
    expect(cart.name).to.be.a('string');
    expect(toDo.name).to.be.a('string');
    expect(wrongDescription.name).to.be.a('string');
  })

  it('should return the name of the ShoppingListItem', function () {
    cart.name.should.equal('grocery');
    expect(toDo.name).to.equal('to do');
    wrongDescription.name.should.equal('name');
  });

  it('should return that the ShoppingListItem has a property called description', function () {
    expect(cart).has.own.property('description');
    expect(toDo).has.own.property('description');
    expect(wrongName).has.own.property('description');
    expect(wrongDescription).has.own.property('description');
  });

  it('should return the description of the ShoppingListItem', function () {
    cart.description.should.equal('This is the grocery list.');
    toDo.description.should.equal('This is a todo list.');
    wrongName.description.should.equal('A wrong list');
  });

  it('should return that the ShoppingListItem has a property called is_done', function () {
    expect(cart).has.own.property('is_done');
    expect(toDo).has.own.property('is_done');
    expect(wrongName).has.own.property('is_done');
    expect(wrongDescription).has.own.property('is_done');
  });

  it('should return the values given to the ShoppingListItem', function () {
    cart.is_done.should.equal(false);
    cart.is_done.should.equal(false);
    cart.is_done.should.equal(false);
    cart.is_done.should.equal(false);
  });

  describe('Test ShoppingListItem methods', function () {
    const methodToDo = new ShoppingListItem('one', 'two');
    it('should have a check() method that sets is_done to true', function () {
      methodToDo.check();
      expect(methodToDo.is_done).to.be.true;
    });

    it('should have an uncheck() method that sets is_done to false', function () {
      methodToDo.uncheck();
      expect(methodToDo.is_done).to.be.false;
    });

    it('should have a render() method that returns an HTML formatted string', function () {
      expect(methodToDo.render()).to.be.equal('<li class="completed_false"><span>one</span> <span>two</span></li>');
    });
  });
});
describe('Test ShoppingList class', function () {
  const shoppingList = new ShoppingList();

  it('ShoppingList should be a class', function () {
    expect(shoppingList).to.be.instanceof(ShoppingList);
  });

  it('constructor should have a property of items', function () {
    expect(shoppingList).has.own.property('items');
  });

  it('should return value of items', function () {
    expect(shoppingList.items).to.be.an('array').that.is.empty;
  });

  describe('Test ShoppingList methods', function () {
    const banana = new ShoppingListItem('banana', 'delicious and nutritious');
    const emptyShoppingList = new ShoppingList();
    describe('Test addItem method', function () {

      it('should have an addItem method', function () {
        (shoppingList.addItem).should.be.a('function');
      });

      it('addItem should add the ShoppingListItem to the items array', function () {
        shoppingList.addItem(banana);
        (shoppingList.items).should.contain(banana);
      });

      it('expect ShoppingListItem being passed in to be a ShoppingListItem', function () {
        expect(shoppingList.items[0]).to.be.instanceof(ShoppingListItem);
      });

      it('should throw an error if item being passed is not a ShoppingListItem', function () {
        expect(() => shoppingList.addItem('banana')).to.throw(TypeError);
      });
    });
    
    describe('Test removeItem method', function () {
      const chickenFeet = new ShoppingListItem('Chicken feet', 'People eat these?');
      const pineapplePizza = new ShoppingListItem('Pineapple Pizza', '"The good stuff."');
      const veggiePizza = new ShoppingListItem('Veggie Pizza', '"The terrible stuff."');
      
      it('should have a removeItem method', function () {
        expect(shoppingList.removeItem).to.be.a('function');
      });
      
      it('removeItem should remove ShoppingListItem from the property items', function () {
        shoppingList.removeItem(banana);
        expect(shoppingList.items).to.not.include(banana);
      });
      
      it('should invoke removeItem without a parameter and remove the last item in the ShoppingList', function () {
        const newShoppingList = new ShoppingList();
        const apple = new ShoppingListItem('apple', 'keeps doctors away');
        const stackOfPancakes = new ShoppingListItem('stack of pancakes', 'why does the grocery store sell it like this?');
        newShoppingList.addItem(apple);
        newShoppingList.addItem(stackOfPancakes);
        newShoppingList.removeItem();
        expect(shoppingList.items).to.not.include(stackOfPancakes);
      });

      it('should call removeItem without a parameter and "items" is empty', function () {
        emptyShoppingList.removeItem();
        expect(emptyShoppingList.items).to.be.an('array').that.is.empty;
      });

      it('should throw an error if parameter of removeItem does not exist in "items"',
        function () {
          expect(() => emptyShoppingList.removeItem(chickenFeet))
            .to.throw(TypeError);
        });

      it('should throw an error, if item passed is not in "items"', function () {
        emptyShoppingList.addItem(pineapplePizza);
        expect(() => emptyShoppingList.removeItem(veggiePizza))
          .to.throw(TypeError);
      });
    });
    describe('Test render method', function () {
      const veggiePizza = new ShoppingListItem('Veggie Pizza', '"The terrible stuff."');
      it('render should be a function', function () {
        expect(emptyShoppingList.render).to.be.a('function');
      });

      it('should return an HTML formatted string from "Pineapple Pizza" item.', function () {
        expect(emptyShoppingList.render()).to.be.equal('<ul><li class="completed_false"><span>Pineapple Pizza</span> <span>"The good stuff."</span></li></ul>');
      });

      it('should return same HTML formatted string that also includes "Veggie Pizza"', function () {
        emptyShoppingList.addItem(veggiePizza);
        expect(emptyShoppingList.render()).to.be.equal('<ul><li class="completed_false"><span>Pineapple Pizza</span> <span>"The good stuff."</span></li><li class="completed_false"><span>Veggie Pizza</span> <span>"The terrible stuff."</span></li></ul>');
      });
    });
  });
});