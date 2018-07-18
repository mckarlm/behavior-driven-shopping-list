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
    })

    it('should have a render() method that returns an HTML formatted string', function(){
      expect(methodToDo.render()).to.be.equal('<li class="completed_[is_done]"><span>one</span> <span>two</span></li>');
    })
  });
});