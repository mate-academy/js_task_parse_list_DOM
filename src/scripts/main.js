'use strict';

function getSalaryNumber(employee) {
  const salaryString = employee.dataset.salary.slice(1).replaceAll(',', '');

  return +salaryString;
}

function sortList(list) {
  const employeesArray = [...list.children];

  const newemployeesArray = employeesArray.sort((a, b) => {
    const childA = getSalaryNumber(a);
    const childB = getSalaryNumber(b);

    return childB - childA;
  });

  list.append(...newemployeesArray);
}

function getEmployees(list) {
  const workerArray = [...list.children];

  return workerArray.map((worker) => {
    return {
      name: worker.textContent.trim(),
      position: worker.dataset.position,
      salary: getSalaryNumber(worker),
      age: +worker.dataset.age,
    };
  });
}

const mainList = document.querySelector('ul');

sortList(mainList);
getEmployees(mainList);
