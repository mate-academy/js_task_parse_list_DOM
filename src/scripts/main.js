'use strict';

function convertNumber(str) {
  const newStr = str.slice(1).replace(',', '');
  const salaryNumber = Number(newStr);

  return salaryNumber;
}

function sortList(list) {
  const sortedItems = Array.from(list).sort((a, b) => {
    const salaryA = convertNumber(a.getAttribute('data-salary'));
    const salaryB = convertNumber(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  const parentName = list[0].parentNode;

  sortedItems.forEach((item) => {
    parentName.appendChild(item);
  });
}

function getEmployees(list) {
  const listOfEmployees = [];

  list.forEach((employee) => {
    const salary = convertNumber(employee.getAttribute('data-salary'));
    const position = employee.getAttribute('data-position');
    const age = employee.getAttribute('data-age');
    const employeeName = employee.textContent.trim();

    listOfEmployees.push({
      name: employeeName,
      position,
      salary,
      age,
    });
  });

  return listOfEmployees;
}

const employeesList = document.querySelectorAll('li');

sortList(employeesList);
getEmployees(employeesList);
