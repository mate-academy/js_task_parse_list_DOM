'use strict';

function convertToNumber(salary) {
  const cleanedString = salary.replace(/[$,]/g, '');
  const number = Number(cleanedString);

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
  const result = liArr.map(item => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });

  return result;
}

getEmployees();
