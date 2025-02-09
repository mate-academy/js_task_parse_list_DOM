'use strict';

const employeeList = document.querySelector('ul');

const parseSalary = (salary) => parseInt(salary.replace(/[$,]/g, ''));

const sortList = (ulElement) => {
  const items = Array.from(ulElement.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => ulElement.appendChild(item));
};

const getEmployees = (ulElement) => {
  return Array.from(ulElement.children).map((item) => ({
    name: item.textContent.trim(),
    salary: parseSalary(item.dataset.salary),
  }));
};

sortList(employeeList);
getEmployees(employeeList);
