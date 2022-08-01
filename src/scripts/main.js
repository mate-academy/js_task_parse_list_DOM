'use strict';

const ourList = document.querySelector('ul');

const sortList = (list) => {
  const workers = list.querySelectorAll('li');
  const sortedWorkers = [...workers]
    .sort((a, b) => +b.dataset.salary
      .replace(',', '').slice(1) - +a.dataset.salary.replace(',', '').slice(1));

  sortedWorkers.forEach(worker => {
    list.append(worker);
  });
};

const getEmployees = (list) => {
  const employees = [];
  const workers = list.querySelectorAll('li');

  [...workers].forEach(worker => {
    employees.push({
      name: worker.innerText,
      position: worker.dataset.position,
      salary: +worker.dataset.salary,
      age: worker.dataset.age,
    });
  });

  return employees;
};

sortList(ourList);
getEmployees(ourList);
