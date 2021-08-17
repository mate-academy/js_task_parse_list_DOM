'use strict';

const list = document.querySelector('ul');
const listItems = list.children;

const getSalary = ({ dataset }) => {
  return +dataset.salary.replace('$', '').split(',').join('');
};

const sortList = (listHtml) => {
  return [...listHtml].sort((workerA, workerB) => (
    getSalary(workerB) - getSalary(workerA)
  ));
};

const getEmployees = (listHtml) => {
  return [...listHtml].map(worker => (
    {
      name: worker.innerText,
      position: worker.dataset.position,
      salary: worker.dataset.salary,
      age: worker.dataset.age,
    }
  ));
};

setTimeout(() => {
  const sortedItems = sortList(listItems);

  for (const item of sortedItems) {
    list.append(item);
  }

  getEmployees(listItems);
}, 1000);
