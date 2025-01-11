'use strict';

const listItems = [...document.querySelectorAll('ul li')];

// listItems.forEach((item) => {
//   console.log(item.dataset); // Выводит объект dataset каждого <li>
// });

// const listItemsSalary = listItems.map((item) => item.dataset.salary);

function convertToNumber(item) {
  return +item.replace(/[$,]/g, '');
}

function sortList(list) {
  list.sort(
    (item1, item2) =>
      convertToNumber(item2.dataset.salary) -
      convertToNumber(item1.dataset.salary),
  );

  const parentUl = list[0].parentNode;

  list.forEach((item) => parentUl.appendChild(item));
}

function getEmployees(list) {
  return list.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

sortList(listItems);
getEmployees(listItems);

// console.log(employees);

// console.log(sortedListItems);

// sortedListItems.forEach((item) => {
//   document.
// });

// sortedListItems.forEach((item) => {
//   console.log(item.dataset); // Выводит объект dataset каждого <li>
// });
