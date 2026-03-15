'use strict';

function salaryToInt(str) {
  return +str.replace('$', '').replaceAll(',', '');
}

function sortList(list) {
  const sortedList = [...list.children].sort((a, b) => {
    const emp1 = salaryToInt(a.dataset.salary);
    const emp2 = salaryToInt(b.dataset.salary);

    return emp2 - emp1;
  });

  sortedList.forEach((item) => {
    list.appendChild(item);
  });

  return sortedList;
}

function getEmployees(list) {
  return [...list.children].map((employee) => {
    return {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

const employeesList = document.querySelector('ul');

sortList(employeesList);
getEmployees(employeesList);
