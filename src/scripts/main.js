'use strict';

const listOfEmployees = document.querySelectorAll('ul li');

function toNumber(string) {
  return string.slice(1).split(',').join('') * 1;
}

function sortList(list) {
  const sortedList = [...list].sort((employee1, employee2) => {
    const emp1 = toNumber(employee1.dataset.salary);
    const emp2 = toNumber(employee2.dataset.salary);

    return emp2 - emp1;
  });

  const employeeList = document.querySelector('ul');

  sortedList.forEach((employee) => {
    employeeList.appendChild(employee);
  });
};

function getEmployees(array) {
  return array.map((employee) => {
    const employeeName = employee.innerText;
    const position = employee.dataset.position;
    const salary = employee.dataset.salary;
    const age = employee.dataset.age;

    return {
      name: employeeName,
      position,
      salary,
      age,
    };
  });
};

sortList(listOfEmployees);

getEmployees([...listOfEmployees]);
