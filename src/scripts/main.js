'use strict';

const listEmployes = [...document.getElementsByTagName('li')];

function sortList() {
  const salaryArr = listEmployes.map((el) => {
    const salary = el.dataset.salary;
    const numericSalary = Number(salary.replace(/[\$,]/g, ''));

    return { element: el, salary: numericSalary };
  });

  salaryArr.sort((fEl, sEl) => sEl.salary - fEl.salary);

  const parentLi = listEmployes[0].parentNode;

  salaryArr.forEach(({ element }) => {
    parentLi.appendChild(element);
  });
}

function getEmployees() {
  const objectOfEmployees = listEmployes.map((el) => {
    const name = el.textContent.trim();
    const position = el.dataset.position;
    const salary = el.dataset.salary;
    const age = el.dataset.age;

    return {
      name,
      position,
      salary,
      age,
    };
  });

  return objectOfEmployees;
}

sortList();
console.log(getEmployees());
