'use strict';

const list = document.querySelector('ul');
const listItems = [...list.children];

const formattedSalary = (salary) =>
  Number(salary.split(',').join('').slice(1));

function getSorted(array) {
  const sortedArray = array.sort((a, b) =>
    formattedSalary(b.dataset.salary) - formattedSalary(a.dataset.salary));

  list.append(...sortedArray);
}

function convertIntoObjects(array) {
  return array.map((employee) => ({
    name: employee.textContent,
    ...employee.dataset,
  }));
}

convertIntoObjects(listItems);
getSorted(listItems);
