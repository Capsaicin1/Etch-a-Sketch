// const canvasContainer = document.querySelector(".canvas-container");
// canvasContainer.innerHTML = "<div>";
// const div = document.querySelector(".canvas-container div");
// div.innerHTML = "<p>";

const generateDiv = () => {
  const canvasContainer = document.querySelector(".canvas-container");
  for (let i = 0; i < 10; i++) {
    let div = document.createElement("div");
    div.style.color = "red";
    div.style.width = "48px";
    div.style.height = "48px";
    div.classList.add("div");
    canvasContainer.appendChild(div);
  }
};

const displayGrid = () => {
  const sizeButtons = document.querySelectorAll(".circle");
  sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.className.includes("active")) return;

      button.setAttribute("class", `${button.className} active`);
      generateDiv();
    });
  });
};

displayGrid();
