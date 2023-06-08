'use strict';

const listOfEmployees = document.querySelector('ul');

function getSalary(data) {
  return +data.replaceAll(/[$,]/g, '');
}

function sortEmployees(list) {
  const items = [...list.children];

  const sortedItems = items.sort(
    (i2, i1) => getSalary(i1.dataset.salary) - getSalary(i2.dataset.salary)
  );

  sortedItems.forEach(item => list.append(item));
}

function displayEmployees(list) {
  const items = [...list.children];

  return items.map(item => {
    const obj = {
      name: item.innerText,
      age: item.dataset.age,
      salary: item.dataset.salary,
      position: item.dataset.position,
    };

    return obj;
  });
}

sortEmployees(listOfEmployees);
displayEmployees(listOfEmployees);
