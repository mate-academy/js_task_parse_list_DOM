'use strict';

// write code here
const employeeList = document.querySelector('ul');
const employeeItems = Array.from(document.querySelectorAll('ul > li'));

const normalizeSalary = (salary) => {
  let result = '';

  for (const ch of salary) {
    if (!isNaN(ch)) {
      result += ch;
    }
  }

  return +result;
};

const addEmployeesToList = (list) => {
  employeeList.innerHTML = '';
  list.forEach((li) => employeeList.append(li));
};

const sortList = (list) => {
  const sortedList = list.sort(
    (a, b) =>
      normalizeSalary(b.dataset.salary) - normalizeSalary(a.dataset.salary),
  );

  addEmployeesToList(sortedList);
};

const getEmployees = (list) => {
  return list.map((employee) => {
    return {
      name: employee.textContent.trim(),
      position: employee.dataset.position.trim(),
      salary: employee.dataset.salary.trim(),
      age: employee.dataset.age.trim(),
    };
  });
};

sortList(employeeItems);
getEmployees(employeeItems);
