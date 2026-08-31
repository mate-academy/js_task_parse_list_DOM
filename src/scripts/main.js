/* eslint-disable function-paren-newline */
'use strict';

// eslint-disable-next-line max-len
const cleanSalary = (str) =>
  Number(str.replaceAll('$', '').replaceAll(',', ''));

function sortList(list) {
  const workers = Array.from(list.querySelectorAll('li'));

  workers.sort((worker1, worker2) => {
    const salary1 = cleanSalary(worker1.dataset.salary);
    const salary2 = cleanSalary(worker2.dataset.salary);

    return salary2 - salary1;
  });

  list.append(...workers);
}

function getEmployees(list) {
  const workers = Array.from(list.querySelectorAll('li'));

  return workers.map((worker) => {
    return {
      name: worker.dataset.name,
      position: worker.dataset.position,
      salary: cleanSalary(worker.dataset.salary),
      age: Number(worker.dataset.age),
    };
  });
}

const foundList = document.querySelector('ul');

sortList(foundList);
getEmployees(foundList);
