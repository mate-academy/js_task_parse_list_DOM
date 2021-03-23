'use strict';

const listOfWorkers = document.querySelectorAll('li');
const workersList = [...listOfWorkers];
const UlOfWorkers = document.querySelector('ul');

const sortList = (list) => {
  const sortedList = list.sort((workerA, workerB) => {
    return +workerB.dataset.salary
      .slice(1)
      .split(',')
      .join('')
      - +workerA.dataset.salary
        .slice(1)
        .split(',')
        .join('');
  });

  UlOfWorkers.append(...sortedList);
};

function getEmployees(list) {
  return list
    .map(worker => ({
      name: worker.innerText,
      position: worker.dataset.position,
      salary: worker.dataset.salary,
      age: worker.dataset.age,
    }));
};

sortList(workersList);
getEmployees(workersList);
