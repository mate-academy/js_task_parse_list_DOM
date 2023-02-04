'use strict';

const list = document.querySelector('ul');
const employyes = [...list.children];

function removeChars(str) {
  return +str.replaceAll(',', '').replaceAll('$', '');
}

const getEmployees = (employeesList) => {
  return employeesList.map((employee) => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: +employee.dataset.age,
  }));
};

getEmployees(employyes);

const sortList = (employeesList) => {
  employeesList.sort((empA, empB) => {
    const salaryA = removeChars(empA.dataset.salary);
    const salaryB = removeChars(empB.dataset.salary);

    return salaryB - salaryA;
  });

  for (const person of employeesList) {
    list.append(person);
  }
};

sortList(employyes);
