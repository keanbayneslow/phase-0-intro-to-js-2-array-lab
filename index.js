// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
  }

  function destructivelyPrependCat(name) {
    cats.unshift("Bob");
  }

  function destructivelyRemoveLastCat(name) {
    cats.pop();
  }

  function destructivelyRemoveFirstCat(name) {
    cats.shift();
  }

  function appendCat(name) {
    const newArray = cats.slice(); // Create a new array by copying the cats array
    newArray.push("Broom"); // Append the new cat to the new array
    return newArray; // Return the new array
  }

  function prependCat(name) {
    const newArray = cats.slice();
    newArray.unshift("Arnold");
    return newArray; 
  }

  function removeLastCat(name) {
    const newArray = cats.slice(0, -1);
    return newArray; 
  }

  function removeFirstCat(name) {
    const newArray = cats.slice(1);
    return newArray; 
  }