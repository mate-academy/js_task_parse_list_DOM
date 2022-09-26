'use strict';

const allWorkers = [...document.querySelectorAll('li')];
const workerData = [];

allWorkers.forEach((worker) => {
  const workerInfo = {};

  workerInfo.name = worker.innerText;
  workerInfo.salary = worker.dataset.salary;
  workerInfo.position = worker.dataset.position;
  workerInfo.age = worker.dataset.age;

  workerData.push(workerInfo);
});

const sortedData = sortList(workerData);

allWorkers.forEach((worker, index) => {
  worker.innerText = sortedData[index].name;
  worker.dataset.position = sortedData[index].position;
  worker.dataset.salary = sortedData[index].salary;
  worker.dataset.age = sortedData[index].age;
});

function sortList(list) {
  return list
    .sort((personA, personB) => (
      fromDollars(personB.salary) - fromDollars(personA.salary)
    ));
}

function fromDollars(salary) {
  return +salary.replace(/[$,]/g, '');
}
