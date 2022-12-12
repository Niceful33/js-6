const categories = document.querySelector("#categories");
const categoriesNum = categories.children;
console.log("Number of categories:", categoriesNum.length);

for (let i = 0; i < categoriesNum.length; i += 1) {
  console.log("Category:", categoriesNum[i].firstElementChild.textContent);
  console.log("Elements:", categoriesNum[i].children[1].children.length);
}
