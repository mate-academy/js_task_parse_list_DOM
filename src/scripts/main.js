'use strict';

const listElement = document.querySelector('ul');

const employeesArr = [...listElement.children];

listElement.innerHTML = '';

function sortWorkers(arr) {
  const sortedWorkers = arr.sort((employee1, employee2) => {
    const salary1 = +employee1.dataset.salary.replace(/[$,]/g, '');
    const salary2 = +employee2.dataset.salary.replace(/[$,]/g, '');

    return salary2 - salary1;
  });

  listElement.append(...sortedWorkers);
}

function getEmployees(arr) {
  return arr.map((worker) => {
    return {
      name: worker.innerText,
      position: worker.dataset.position,
      salary: worker.dataset.salary,
      age: worker.dataset.age,
    };
  });
}

sortWorkers(employeesArr);
getEmployees(employeesArr);
