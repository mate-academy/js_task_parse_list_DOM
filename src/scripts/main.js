'use strict';

// write code here
const list = document.querySelectorAll('li');

function getEmployees(employeesList) {
  const employees = [];

  employeesList.forEach((employe) => {
    employees.push({
      name: employe.textContent.trim(),
      position: employe.getAttribute('data-position'),
      salary: employe.getAttribute('data-salary'),
      age: employe.getAttribute('data-age'),
    });
  });

  return employees;
}

getEmployees(list);

function sortList(employeesList) {
  const listCopy = [...employeesList];

  const salaryNum = (salary) => salary.slice(1).split(',').join('');

  return listCopy.sort((employeA, employeB) => {
    const salaryA = salaryNum(employeA.getAttribute('data-salary'));
    const salaryB = salaryNum(employeB.getAttribute('data-salary'));

    return salaryB - salaryA;
  });
}

const sortedList = sortList(list);

const ul = document.querySelector('ul');

ul.innerHTML = '';

sortedList.forEach((item) => {
  const li = document.createElement('li');

  li.textContent = item.textContent;
  li.setAttribute('data-position', item.getAttribute('data-position'));
  li.setAttribute('data-salary', item.getAttribute('data-salary'));
  li.setAttribute('data-age', item.getAttribute('data-age'));

  ul.appendChild(li);
});
