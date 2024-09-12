'use strict';

const allWorkers = [...document.querySelectorAll('li')];

const workerData = allWorkers.map((worker) => ({
  name: worker.innerText,
  salary: worker.dataset.salary,
  position: worker.dataset.position,
  age: worker.dataset.age,
}));

const sortedData = sortList(workerData);

allWorkers.forEach((worker, index) => {
  worker.innerText = sortedData[index].name;
  worker.dataset.position = sortedData[index].position;
  worker.dataset.salary = sortedData[index].salary;
  worker.dataset.age = sortedData[index].age;
});

function sortList(list) {
  const listToSort = [...list];

  return listToSort
    .sort((personA, personB) => (
      fromDollars(personB.salary) - fromDollars(personA.salary)
    ));
}

function fromDollars(salary) {
  return +salary.replace(/[$,]/g, '');
}
