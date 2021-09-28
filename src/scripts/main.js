'use strict';

// write code here
function salaryToNumber(li) {
  return +li.dataset.salary.replace(/[$,]/g, '');
};

const liArr = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function sortList(arr) {
  const sorter = arr.sort((a, b) => salaryToNumber(a) - salaryToNumber(b))
    .reverse();

  return ul.append(...sorter);
}

function getEmployees(arr) {
  return arr.map(employee => Object.assign({},
    {
      name: employee.innerText,
      salary: employee.dataset.salary,
      position: employee.dataset.position,
      age: employee.dataset.age,
    }
  ));
}

sortList(liArr);
getEmployees(liArr);
