'use strict';

const list = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function sortEmployees(array) {
  const salaryNum = (salary) => +salary.slice(1).split(',').join('');
  
  const sorted = array.sort((a, b) => {
    return salaryNum(b.dataset.salary) - salaryNum(a.dataset.salary);
  });

  list.append(...sorted);
};

function getEmployees(array) {
  return array.map((item) => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

sortEmployees(employees);
getEmployees(employees);


// write code here
