interface Fruit {
  src: string;
  alt: string;
  href: string;
}

const moreFruit: Fruit[] = [
  {
    src: "/images/banana.jpg",
    alt: "Banana, Photo by Charles Deluvio",
    href: "https://unsplash.com/photos/0v_1TPz1uXw",
  },
  {
    src: "/images/orange.jpg",
    alt: "Orange, Photo by Mae Mu",
    href: "https://unsplash.com/photos/U1iYwZ8Dx7k",
  },
  {
    src: "/images/strawberry.jpg",
    alt: "Strawberry, Photo by Allec Gomes",
    href: "https://unsplash.com/photos/xnRg3xDcNnE",
  },
  {
    src: "/images/advocado.jpg",
    alt: "Advocado, Photo by Thought Catalog",
    href: "https://unsplash.com/photos/9aOswReDKPo",
  },
  {
    src: "/images/cherries.jpg",
    alt: "Cherries, Photo by Mae Mu",
    href: "https://unsplash.com/photos/vbAEHCrvXZ0",
  },
];

moreFruit.forEach((fruit) => {
  const loadFruitImage = new Image();
  loadFruitImage.src = fruit.src;
});

const $fruitText: JQuery<HTMLSpanElement> = $(".fruit");
const $fruitLink: JQuery<HTMLAnchorElement> = $(".fruit-image-link");
const $fruitImage: JQuery<HTMLImageElement> = $(".fruit-image");

function randomFruit() {
  const randomIndex = _.random(0, 4);
  const newFruit = moreFruit[randomIndex];
  console.info("It's time for a new fruit!");
  $fruitImage.attr("src", newFruit.src);
  $fruitImage.attr("alt", newFruit.alt);
  $fruitLink.attr("href", newFruit.href);
}

setTimeout(() => {
  $fruitText.text("FRUIT");
  randomFruit();
  setInterval(randomFruit, 1000);
}, 3000);
