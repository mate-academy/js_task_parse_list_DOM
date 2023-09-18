'use strict';

const employeesItems = document.querySelectorAll('li');
const employeesList = document.querySelector('ul');

function salaryConverter(employee) {
  return +employee.dataset.salary.replace(/[$,]/g, '');
};

function sortList(list) {
  const sorted = [...list].sort(
    (item1, item2) => {
      const parsedSalary1 = salaryConverter(item1);
      const parsedSalary2 = salaryConverter(item2);

      return parsedSalary2 - parsedSalary1;
    }
  );

  sorted.forEach(item => {
    employeesList.appendChild(item);
  });
}

function getEmployees(list) {
  return [...list].map(item => {
    const data = item.dataset;

    const obj = {
      name: item.textContent.trim(),
      position: data.position,
      salary: data.salary,
      age: data.age,
    };

    return obj;
  });
}

sortList(employeesItems);
getEmployees(employeesItems);
