'use strict';

const listElement = document.querySelector('ul');
const workersArr = [...listElement.children];

listElement.innerHTML = '';

sortWorkers(workersArr);
getEmployees(workersArr);

function sortWorkers(arr) {
  const sortedWorkers = arr.sort((worker1, worker2) => {
    const salary1 = +worker1.dataset.salary.replace(/[$,]/g, '');
    const salary2 = +worker2.dataset.salary.replace(/[$,]/g, '');

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
