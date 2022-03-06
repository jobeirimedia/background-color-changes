const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

// FUNCTIONS
const randomColor = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateRandomColor = () =>
  `rgb(${randomColor(0, 255)}, ${randomColor(0, 255)}, ${randomColor(0, 255)})`;

btn.addEventListener("click", function () {
  container.style.backgroundColor = generateRandomColor();
  // let's create generateRandomColor function
});

// DONE
// It's showtime.

// If you want to see more content from me.
// Please subscribe.
// Good luck!
// JobeiriMedia
