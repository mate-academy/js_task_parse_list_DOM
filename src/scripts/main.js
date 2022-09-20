'use strict';

// write code here
const employeesList = document.querySelector('ul');

const formatSalaryToNumber = (str) => Number(str.replace(/\$|,/gi, ''));

const sortList = (listOfEmployees) => {
  const sortedItems = [...listOfEmployees.querySelectorAll('li')];

  sortedItems.sort((prev, curr) => {
    const prevSalary = formatSalaryToNumber(prev.dataset.salary);
    const currSalary = formatSalaryToNumber(curr.dataset.salary);

    return currSalary - prevSalary;
  });

  employeesList.append(...sortedItems);
};

sortList(employeesList);

const getEmployees = (listOfEmployees) => {
  const employeesItems = [...listOfEmployees.querySelectorAll('li')];

  return employeesItems.map(employee => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
};

getEmployees(employeesList);
