'use strict';

const mainList = document.body.querySelector('ul');
const listOfWorkers = [...document.body.querySelectorAll('li')];

function sortList(list) {
  const makeNumber = (string) => {
    return +string.slice(1).split(',').join('');
  };

  const sortedWorkers = list.sort(
    (a, b) => makeNumber(b.dataset.salary) - makeNumber(a.dataset.salary));

  mainList.append(...sortedWorkers);
};

function getEmployees(list) {
  return list.map(worker => ({
    name: worker.innerText,
    position: worker.dataset.position,
    salary: worker.dataset.salary,
    age: worker.dataset.age,
  }));
}

sortList(listOfWorkers);
getEmployees(listOfWorkers);
