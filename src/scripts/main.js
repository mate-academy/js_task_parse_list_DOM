'use strict';

function getNumber(str) {
  return +str.split('').filter(num => !isNaN(num)).join('');
}

function sortList(list) {
  return list
    .sort((prev, next) => {
      const { salary: prevSalary } = prev.dataset;
      const { salary: nextSalary } = next.dataset;

      return getNumber(nextSalary) - getNumber(prevSalary);
    });
}

function getEmployees(list) {
  return list.map(item => (
    {
      name: item.innerText,
      ...item.dataset,
    }
  ));
}

const employeesList = [ ...document.querySelectorAll('li') ];

const sortedEmployees = sortList(employeesList);
const employees = getEmployees(sortedEmployees);

employees.forEach(employee => {
  const neededEmployee = employeesList
    .find(element => element.innerText === employee.name);

  document.querySelector('ul').append(neededEmployee);
});
