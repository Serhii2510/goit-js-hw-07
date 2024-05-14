const input = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", () => {
  const amount = input.value;
  createBoxes(amount);
});

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    const boxesHtml = [];
    for (let i = 1; i <= amount; i++) {
      const boxToAdd = `<div style="background-color: ${getRandomHexColor()}; width: ${20 + i * 10}px; height: ${20 + i * 10}px"></div>`;
      boxesHtml.push(boxToAdd);
    }
    boxes.innerHTML = boxesHtml.join("");
    input.value = "";
  } 
}

const buttonDestroy = document.querySelector("button[data-destroy]");
buttonDestroy.addEventListener("click", () => destroyBoxes());

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

