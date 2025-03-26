'use strict';

const employees = [...document.querySelectorAll('li')];
const list = document.querySelector('ul');

function sortList(workers) {
  const sortedList = workers.sort(
    (worker1, worker2) =>
      helper(worker2.dataset.salary) - helper(worker1.dataset.salary),
  );

  list.innerHTML = '';

  sortedList.forEach((worker) => {
    const li = document.createElement('li');

    li.innerText = worker.innerText.replace(/(\r\n|\n|\r)/g, '');
    list.append(li);
  });

  function helper(salary) {
    return +salary.slice(1).replace(',', '');
  }
}

sortList(employees);

function getEmployees(workers) {
  const rightObjects = [];

  for (const worker of workers) {
    const employee = {
      name: worker.innerText.replace(/(\r\n|\n|\r)/g, '').trim(),
      position: worker.dataset.position,
      salary: worker.dataset.salary,
      age: worker.dataset.age,
    };

    rightObjects.push(employee);
  }

  return rightObjects;
}

getEmployees(employees);
