'use strict';

function convertToNumber(salary) {
  const number = Number(salary.replace(/[$,]/g, ''));

  return number;
}

const ul = document.querySelector('ul');
const liArr = [...ul.querySelectorAll('li')];

function sortList(propName) {
  ul.innerHTML = '';

  liArr.sort((a, b) => {
    const salaryB = convertToNumber(b.dataset[propName]);
    const salaryA = convertToNumber(a.dataset[propName]);

    return salaryB - salaryA;
  }).forEach(li => ul.append(li));
}

sortList('salary');

function getEmployees() {
  const result = liArr.map(item => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));

  return result;
}

getEmployees();
