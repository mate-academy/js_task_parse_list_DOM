'use strict';

function sortList(list) {
  const employeesArr = [...list];

  employeesArr.sort((x, y) => {
    const salaryX = salaryToNumber(x);
    const salaryY = salaryToNumber(y);

    return salaryY - salaryX;
  });

  const parentList = list[0].parentNode;

  parentList.innerHTML = '';

  employeesArr.forEach((employee) => parentList.appendChild(employee));
}

function salaryToNumber(element) {
  return +element.getAttribute('data-salary').slice(1).split(',').join('');
}

function getEmployees() {
  const list = document.querySelector('ul');
  const employeeElements = list.querySelectorAll('li');

  sortList(employeeElements);
}

getEmployees();
