const categoriesByItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesByItem.length}`);
categoriesByItem.forEach((category) => {
    const h2Text = category.querySelector("h2");
    console.log(`Category: ${h2Text.textContent}`);
    const itemList = category.querySelectorAll("li");
    console.log(`Elements: ${itemList.length}`);
})