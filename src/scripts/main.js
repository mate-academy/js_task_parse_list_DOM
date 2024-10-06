'use strict';

const listItems = document.querySelectorAll('ul li');
const list = document.querySelector('ul');

const salaryToNumber = (salary) => salary.replace(/[$,]/g, '');

const sortList = (listNode) => {
  return [...listNode].sort((a, b) => {
    const firstSalary = salaryToNumber(a.getAttribute('data-salary'));
    const secondSalary = salaryToNumber(b.getAttribute('data-salary'));

    return secondSalary - firstSalary;
  });
};

const sortedList = sortList(Array.from(listItems));

const getEmployees = (employessList) =>
  employessList.reduce((acc, employeeItem) => {
    const salary = employeeItem.getAttribute('data-salary');
    const position = employeeItem.getAttribute('data-position');
    const age = employeeItem.getAttribute('data-age');
    const employeeName = employeeItem.textContent.trim();

    acc.push({
      name: employeeName,
      position,
      salary,
      age,
    });

    return acc;
  }, []);

const employees = getEmployees(sortedList);

const employeesListTemplate = employees.reduce((acc, employee) => {
  let template = acc;
  const { position, salary, age } = employee;

  template += `     <li
        data-position=${position}
        data-salary=${salary}
        data-age=${age}
      >
        ${employee.name}
      </li>`;

  return template;
}, '');

list.innerHTML = employeesListTemplate;
