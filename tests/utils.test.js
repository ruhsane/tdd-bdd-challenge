const mocha = require("mocha");
const chai = require("chai");
const utils = require("../utils");
const expect = chai.expect;

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello();
  expect(hello).to.be.a("string");
  expect(hello).to.equal("Hello");
  expect(hello).with.lengthOf(5);
});

// ========================================================
// Level 1 Challenges
// ========================================================

it("should return the area of a 5 by 6 rectangle", function() {
    const area = utils.area(5, 6);
    expect(area).to.be.equal(30);
    expect(area).to.be.a("Number");
});

it("should return the are of a circle of radius 5", function() {
    const circleArea = utils.circleArea(5);
    expect(circleArea).to.be.equal(78.53981633974483);
    expect(circleArea).to.be.a("Number")
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

it("Should create a new (object) Item with name and price", function() {
    const item = {name: "water", price:"2"};
    expect(item).to.be.a("Object");
    expect(item).to.have.property("name");
    expect(item).to.have.property("price");
});

it("Should return an array containing all items in cart", function() {
    var cart = { Items: ["apple", "banana", "hat"] };
    expect(cart.Items).to.be.a("Array");
    chai.assert.isArray(cart.Items);
    // expect(cart.Items.length).to.be.gt(0);
    //commented out becase cart can be empty and return nothing
});

it("Should add a new item to the shopping cart", function() {
    var cart = { Items: ["apple", "banana", "hat"] };
    expect(cart.Items.length).to.be.equal(3);
    cart.Items.push("water");
    expect(cart.Items.length).to.be.equal(4);
});

it("Should return the number of items in the cart");

it("Should remove items from cart");

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart");

it("Should validate that an empty cart has 0 items");

it("Should return the total cost of all items in the cart");
