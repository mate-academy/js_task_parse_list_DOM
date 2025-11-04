'use strict';

const listOfEmployees = document.querySelector('ul');

function stringToNumber(str) {
  const clearString = str.replace('$', '').replace(',', '');

  return Number(clearString);
}

function sortList(listElement) {
  const items = Array.from(listElement.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = stringToNumber(a.dataset.salary);
    const salaryB = stringToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  listElement.innerHTML = '';
  items.forEach((item) => listElement.appendChild(item));
}

function getEmployees(listElement) {
  const items = Array.from(listElement.querySelectorAll('li'));

  return items.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: li.dataset.salary,
    age: li.dataset.age,
  }));
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
