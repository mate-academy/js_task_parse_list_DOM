'use strict';

// variables
const list = document.querySelector('ul');
const employees = [...list.children];

// create a list of employees from the data on the page
function getEmployees(employeesList) {
  return employeesList.map((employee) => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: +employee.dataset.age,
  }));
}

getEmployees(employees);

// function for removing chars: $ and ','
function removeChars(str) {
  return +str.replaceAll(',', '').replaceAll('$', '');
}

// sort the list by salary in descending order
const sortedEmployeesList = employees.sort((empA, empB) => {
  const salaryA = removeChars(empA.dataset.salary);
  const salaryB = removeChars(empB.dataset.salary);

  return salaryB - salaryA;
});

// append sorted list to the page
list.append(...sortedEmployeesList);
