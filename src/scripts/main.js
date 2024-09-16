'use strict';

// write code here
function formatSalary(string) {
  return +(string.slice(1).replace(',', ''));
}

function sortList(list) {
  const listElements = [...list.getElementsByTagName('li')];

  listElements.sort((emp1, emp2) => {
    const emp1Salary = formatSalary(emp1.dataset.salary);
    const emp2Salary = formatSalary(emp2.dataset.salary);

    return emp2Salary - emp1Salary;
  });

  listElements.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const listElements = list.getElementsByTagName('li');
  const employees = [];

  for (const element of listElements) {
    const employee = {
      name: element.innerHTML.trim(),
      position: element.dataset.position,
      salary: formatSalary(element.dataset.salary),
      age: +element.dataset.age,
    };

    employees.push(employee);
  }

  return employees;
}

const ul = document.querySelector('ul');

sortList(ul);

getEmployees(ul);
