'use strict';

const employeeList = document.querySelector('ul');
const ulList = [...document.querySelectorAll('li')];

const convertNum = salary => +salary.slice(1).split(',').join('');

function sortList(list) {
  const sortedList = list.sort((a, b) =>
    convertNum(b.dataset.salary) - convertNum(a.dataset.salary));

  employeeList.append(...sortedList);
};

function getEmployees(list) {
  return list.map((employee) => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

getEmployees(ulList);

sortList(ulList);
