'use strict';

function sortList(employees) {
  const result = [...employees].sort((a, b) => {
    const salaryA = a.dataset.salary;
    const salaryB = b.dataset.salary;

    return formatSalary(salaryB) - formatSalary(salaryA);
  });

  return result;
}

function getEmployees(employees) {
  const result = [...employees].map(employee => ({
    name: employee.innerText.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));

  return result;
}

const list = document.querySelectorAll('li');
const sortedList = sortList(list);
const ulElem = document.querySelector('ul');

sortedList.forEach(li => ulElem.append(li));

sortList(list);
getEmployees(list);

function formatSalary(salary) {
  return +salary.replace('$', '').replace(',', '');
}
