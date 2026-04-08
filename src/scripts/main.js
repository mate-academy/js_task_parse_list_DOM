'use strict';

const list = document.querySelector('ul');
const parseSalary = (salaryStr) => Number(salaryStr.replace(/[^\d]/g, ''));

const sortList = (listElement) => {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  listElement.innerHTML = '';
  listElement.append(...items);
};

const getEmployees = (listElement) => {
  const items = listElement.querySelectorAll('li');

  return Array.from(items).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
};

const employeeList = document.querySelector('ul');

if (employeeList) {
  sortList(employeeList);

  const employees = getEmployees(employeeList);

  // eslint-disable-next-line no-console
  console.log('Sorted Employees Array:', employees);
}
