'use strict';

const salaryElems = [...document.querySelectorAll('[data-salary]')];
const list = document.getElementsByTagName('ul')[0];

getEmployees(salaryElems);
sortList(salaryElems, 'salary', list);

function parseSalary(salaryStr) {
  const cleaned = salaryStr.replace(/[^\d.,]/g, '');
  const normalized = cleaned.replace(/,/g, '');
  return parseFloat(normalized);
}

function sortList(array, attribute, listElement) {
  const sortedArray = array.sort((elem, elem2) => {
    const num = parseSalary(elem.dataset[attribute]);
    const num2 = parseSalary(elem2.dataset[attribute]);
    return num2 - num;
  });

  sortedArray.forEach((li) => {
    listElement.appendChild(li);
  });
};
function getEmployees(l) {
  const array = l.map((element) => {
    return {
      name: element.textContent.trim(),
      position: element.dataset.position,
      age: parseInt(element.dataset.age),
      salary: parseFloat(element.dataset.salary.replace(/[$,]/g, '')),
    };
  });

  return array;
}
