'use strict';

// write code here
function sortList(list) {
  const array = [...list.children];

  const getSalary = (element) => {
    return Number(element.dataset.salary.replace(/[$,]/g, ''));
  };

  array.sort((a, b) => getSalary(b) - getSalary(a));

  for (const item of array) {
    list.append(item);
  }
}

function getEmployees(list) {
  const array = [...list.children];

  const newArray = [];

  for (const li of array) {
    const object = {
      name: li.textContent,
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    };

    newArray.push(object);
  }

  return newArray;
}

sortList(document.querySelector('ul'));
getEmployees(document.querySelector('ul'));
