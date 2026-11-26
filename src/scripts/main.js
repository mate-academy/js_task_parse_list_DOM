'use strict';

const ul = document.querySelector('ul');
const sortList = (employeesList) => {
  const list = [...employeesList.querySelectorAll('li')];

  list.sort(
    (a, b) => salaryConvert(b.dataset.salary) - salaryConvert(a.dataset.salary),
  );

  for (const li of list) {
    ul.append(li);
  }
};

const getEmployees = (employeesList) => {
  const list = [...employeesList.querySelectorAll('li')];
  const employees = list.map((li) => {
    const employee = {};

    employee.name = li.textContent.trim();
    employee.position = li.dataset.position;
    employee.age = Number(li.dataset.age);
    employee.salary = salaryConvert(li.dataset.salary);

    return employee;
  });

  return employees;
};

function salaryConvert(sal) {
  return sal.replaceAll('$', '').replaceAll(',', '');
}

sortList(ul);
getEmployees(ul);
