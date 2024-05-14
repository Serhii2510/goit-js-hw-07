const bodyBackground = document.querySelector("body");
const colorValue = document.querySelector(".color");
const colorChange = document.querySelector(".change-color");
colorChange.addEventListener("click", handleChangeColor);

function handleChangeColor() {
  const newColor = getRandomHexColor();
  bodyBackground.style.backgroundColor = newColor;
  colorValue.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
