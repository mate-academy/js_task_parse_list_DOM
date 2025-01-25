'use strict';

function getSalary(salary) {
  if (!salary) {
    return 0;
  }

  const salaryToNum = salary.replace(/[^0-9]/g, '');

  return salaryToNum ? +salaryToNum : 0;
}

function sortList(list) {
  if (!(list instanceof HTMLElement)) {
    return;
  }

  const items = Array.from(list.querySelectorAll('li'));

  const itemsSorted = items.sort((a, b) => {
    const salaryA = getSalary(a.dataset.salary);
    const salaryB = getSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  itemsSorted.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  if (!(list instanceof HTMLElement)) {
    return;
  }

  const employees = Array.from(list.querySelectorAll('li'));

  return employees.map((el) => {
    // eslint-disable-next-line no-shadow
    const name = el.textContent.trim();
    const position = el.dataset.position;
    const salary = getSalary(el.getAttribute('data-salary'));
    const age = el.dataset.age;

    return {
      name,
      position,
      salary,
      age,
    };
  });
}

const employeesList = document.querySelector('ul');

sortList(employeesList);
getEmployees(employeesList);
