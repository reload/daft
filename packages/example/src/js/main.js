const fruitElement = document.querySelector(".fruit");

function createFruit() {
  return "b" + "a" + +"a" + "a";
}

fruitElement.innerText = createFruit();
