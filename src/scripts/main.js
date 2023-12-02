'use strict';

function sortList(list) {
  const listEmployees = document.querySelector('ul');
  const employees = document.querySelectorAll(`[${list}]`);

  const sortEmployees = [...employees].sort((empl1, empl2) => {
    const e1 = +(empl1.getAttribute(list).replace(/,/g, '.').slice(1));
    const e2 = +(empl2.getAttribute(list).replace(/,/g, '.').slice(1));

    return e2 - e1;
  });

  return sortEmployees.map((employee) => listEmployees.appendChild(employee));
}

function employeesList(list) {
  const employees = document.querySelectorAll(`${list}`);

  return [...employees].map((emp) => {
    return {
      name: emp.textContent.trim(),
      position: emp.dataset.position.trim(),
      salary: +(emp.dataset.salary.replace(/,/g, '.').slice(1)),
      age: +emp.dataset.age,
    };
  });
}

sortList('data-salary');
employeesList('li');
