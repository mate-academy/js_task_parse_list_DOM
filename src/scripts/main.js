'use strict';

const listOfWorkers = document.querySelectorAll('li');
const workersList = [...listOfWorkers];
const UlOfWorkers = document.querySelector('ul');

const onlyNumber = function(string) {
  return +string.slice(1).split(',').join('');
};

const sortList = (list) => {
  const sortedList = list.sort((workerA, workerB) => {
    return onlyNumber(workerB.dataset.salary)
      - onlyNumber(workerA.dataset.salary);
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
