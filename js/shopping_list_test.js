'use strict';

const shopping = require( './../shopping_list.js' )
const chai = require('chai');
const should = chai.should();

describe( 'Test ShoppingListItem class', function() {

  it( 'should return that ShoppingListItem is a class', function() {
    const cart = new ShoppingListItem('grocery','This is the grocery list.',false);
    const toDo = new ShoppingListItem('to do','This is a todo list.',false);
    const wrongName = new ShoppingListItem(0,'A wrong list',true);
    const wrongDescription = new ShoppingListItem('name',{name:'todo'},false);

    expect(toDo).to.be.instanceof(ShoppingListItem);
    expect(cart).to.be.instanceof(ShoppingListItem);
    expect(wrongName).to.be.instanceof(ShoppingListItem);
    expect(wrongDescription).to.be.instanceof(ShoppingListItem);
  });

  it( 'should return that ShoppingListItem is a class', function() {
    toDo.should.be('ShoppingListItem');
    cart.should.be('ShoppingListItem');
    wrongName.should.be('ShoppingListItem');
    wrongDescription.should.be('ShoppingListItem');
  });

  it( 'should return the that ShoppingListItem has a property called name', function() {
    expect(cart).has.own('name');
    expect(toDo).has.own('name');
    expect(wrongName).has.own('name');
    expect(wrongDescription).has.own('name');
  });

  it( 'checks the name is not an empty string', function() {
    cart.name.should.not.equal('');
    toDo.name.should.not.equal('');
    wrongName.name.should.not.equal('');
    wrongDescription.name.should.not.equal('');
  });

  it( 'should return the name of the ShoppingListItem', function() {
    cart.name.should.equal('grocery');
    toDo.name.should.equal('This is a todo list.');
    expect(wrongName.name).to.be(undefined);
    wrongDescription.name.should.equal('name');
  });

  it( 'should return the that ShoppingListItem has a property called description', function() {
    expect(cart).has.own('description');
    expect(toDo).has.own('description');
    expect(wrongName).has.own('description');
    expect(wrongDescription).has.own('description');
  });
  it( 'should return the description of the ShoppingListItem', function() {
    cart.description.should.equal('This is the grocery list.');
    toDo.description.should.equal('This is a todo list.');
    wrongName.description.should.equal('A wrong list');
    expect(wrongDescription.description).to.be(undefined);
  });

  it( 'should return the that ShoppingListItem has a property called is_done', function() {
    expect(cart).has.own('is_done');
    expect(toDo).has.own('is_done');
    expect(wrongName).has.own('is_done');
    expect(wrongDescrition).has.own('is_done');
  });
  it( 'should return the values given to the ShoppingListItem', function() {
    cart.is_done.should.equal(false);
    cart.is_done.should.equal(false);
    cart.is_done.should.equal(true);
    cart.is_done.should.equal(false);
  });

});