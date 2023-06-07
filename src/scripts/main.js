'use strict';

function convertToNumber(salary) {
  const cleanedString = salary.replace(/[$,]/g, '');
  const number = +cleanedString;

  return number;
}

const ul = document.querySelector('ul');
const liArr = [...ul.querySelectorAll('li')];

function sortList(propName) {
  liArr.sort((a, b) => {
    const salaryB = convertToNumber(b.dataset[propName]);
    const salaryA = convertToNumber(a.dataset[propName]);

    return salaryB - salaryA;
  });

  ul.innerHTML = '';
  liArr.forEach(li => ul.append(li));
}

sortList('salary');

function getEmployees() {
  const result = [];

  for (const person of liArr) {
    result.push({
      name: person.textContent.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    });
  }

  return result;
}

getEmployees();
