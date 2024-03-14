'use strict';

// write code here
function convertToNumber(salary) {
  const cleanedString = salary.replace(/[$,]/g, '');
  const number = parseFloat(cleanedString);

  return number;
}

const list = document.querySelector('ul');
const itemsList = [...list.querySelectorAll('li')];

function sortList(propName) {
  itemsList.sort((a, b) => {
    const salaryB = convertToNumber(b.dataset[propName]);
    const salaryA = convertToNumber(a.dataset[propName]);

    return salaryB - salaryA;
  });

  list.innerHTML = '';
  itemsList.forEach((li) => list.insertBefore(li, null));
}

sortList('salary');

function getEmployees() {
  const employees = itemsList.map((person) => {
    return {
      name: person.textContent.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });

  return employees;
}

getEmployees();
