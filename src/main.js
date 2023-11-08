// const canvasContainer = document.querySelector(".canvas-container");
// canvasContainer.innerHTML = "<div>";
// const div = document.querySelector(".canvas-container div");
// div.innerHTML = "<p>";

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
    gridDiv.style.width = "10px";
    gridDiv.style.height = "10px";
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
        generateDiv(30 * 30), "grid-30x30";
      }
    });
  });
};

chooseGrid();
