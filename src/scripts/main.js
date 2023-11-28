'use strict';

const employeesList = document.querySelectorAll('li');

function sortList(list) {
  const salaryToFloat = (salary) => (
    parseFloat(salary.replace('$', '').replace(',', '.'))
  );

  const sortedList = [...list].sort((a, b) => {
    const salaryA = salaryToFloat(a.dataset.salary);
    const salaryB = salaryToFloat(b.dataset.salary);

    return salaryA < salaryB ? 1 : -1;
  });

  document.querySelector('ul').append(...sortedList);
}

function getEmployees(list) {
  return [...list].map(employee => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

sortList(employeesList);
getEmployees(employeesList);
