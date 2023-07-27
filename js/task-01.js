// // 1.1)

// const categories = document.querySelector('#categories');
// const arrItems = categories.children;
// const quantityItems = arrItems.length;
// const resultQuantityItems = `Number of categories: ${quantityItems}`;
// console.log(resultQuantityItems);

// // 2.1)

// const newArrItems = [...arrItems];

// newArrItems.forEach(elem => {
//   const category = `Category: ${elem.firstElementChild.textContent}`;
//   const elements = `Elements: ${elem.lastElementChild.children.length}`;
//   console.log(category);
//   console.log(elements);
// });

// 1.1)

const items = document.querySelectorAll('.item');
const quantityItems = items.length;
const resultQuantityItems = `Number of categories: ${quantityItems}`;
console.log(resultQuantityItems);

// 2.1)

items.forEach(elem => {
  const category = `Category: ${elem.firstElementChild.textContent}`;
  const elements = `Elements: ${elem.lastElementChild.children.length}`;
  console.log(category);
  console.log(elements);
});
