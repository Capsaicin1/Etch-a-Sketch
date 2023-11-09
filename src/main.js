const removeCurrentStyle = (buttons) => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
};

const generateDiv = (divNum = 20 * 20, className = "grid-20x20") => {
  const canvasContainer = document.querySelector(".canvas-container");
  canvasContainer.innerHTML = "";
  for (let i = 0; i < divNum; i++) {
    let gridDiv = document.createElement("div");
    canvasContainer.classList.remove("grid-10x10", "grid-20x20", "grid-30x30");
    canvasContainer.classList.add(className);
    canvasContainer.appendChild(gridDiv);
  }
};

const chooseGrid = () => {
  const sizeButtons = document.querySelectorAll(".circle");
  const colorButtons = document.querySelectorAll(".rectangle");
  sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      removeCurrentStyle(sizeButtons);
      removeCurrentStyle(colorButtons);
      if (button.classList.contains("10x10")) {
        sizeButtons[0].classList.add("active");
        generateDiv(10 * 10, "grid-10x10");
      } else if (button.classList.contains("20x20")) {
        sizeButtons[1].classList.add("active");
        generateDiv(20 * 20, "grid-20x20");
      } else if (button.classList.contains("30x30")) {
        sizeButtons[2].classList.add("active");
        generateDiv(30 * 30, "grid-30x30");
      }
    });
  });
};

const generateColor = (name, color) => {
  const gridItem = document.querySelectorAll(".canvas-container > div");
  gridItem.forEach((item) => {
    if (name === "warm" || name === "cold") {
      const randomColors = color[Math.floor(Math.random() * color.length)];
      item.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = randomColors;
      });
    } else if (name === "black" || name === "white") {
      item.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = color;
      });
    }
  });
};

const chooseColor = () => {
  const colorButtons = document.querySelectorAll(".rectangle");
  colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      removeCurrentStyle(colorButtons);
      if (button.classList.contains("black")) {
        colorButtons[0].classList.add("active");
        generateColor("black", "#000000");
      } else if (button.classList.contains("white")) {
        colorButtons[1].classList.add("active");
        generateColor("white", "#FFFFFF");
      } else if (button.classList.contains("warm")) {
        colorButtons[2].classList.add("active");
        generateColor("warm", [
          "#ffad33",
          "#ff931f",
          "#ff7e33",
          "#fa5e1f",
          "#ec3f13",
        ]);
      } else if (button.classList.contains("cold")) {
        colorButtons[3].classList.add("active");
        generateColor("cold", [
          "#5e60ce",
          "#5390d9",
          "#4ea8de",
          "#48bfe3",
          "#56cfe1",
        ]);
      }
    });
  });
};

chooseGrid();
generateDiv();
chooseColor();
