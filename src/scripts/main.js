'use strict';

const ulItem = document.querySelector('ul');
const liItems = [...ulItem.querySelectorAll('li')];

function sortBySalary(workers) {
  const sortedWorkers = workers.sort((a, b) => {
    const aSalary = +a.dataset.salary.replace(/\D/g, '');
    const bSalary = +b.dataset.salary.replace(/\D/g, '');

    return bSalary - aSalary;
  });

  ulItem.append(...sortedWorkers);
}

function getWorkers(workers) {
  return workers.map((worker) => ({
    name: worker.textContent.trim(),
    position: worker.dataset.position,
    salary: worker.dataset.salary,
    age: worker.dataset.age,
  }));
}

sortBySalary(liItems);
getWorkers(liItems);
