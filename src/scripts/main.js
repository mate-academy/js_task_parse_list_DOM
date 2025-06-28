'use strict';

// write code here
const list = document.querySelector('ul');

function sortList(listElements) {
  return [...listElements.children].sort((a, b) => {
    const salaryToNumber = (worker) =>
      Number(worker.dataset.salary.replace(/[$,]/g, ''));

    return salaryToNumber(b) - salaryToNumber(a);
  });
}

function getEmployees(listElements) {
  return [...listElements.children].map((worker) => {
    return {
      name: worker.innerText,
      position: worker.dataset.position,
      salary: worker.dataset.salary,
      age: worker.dataset.age,
    };
  });
}

const sortedList = sortList(list);

while (list.firstChild) {
  list.firstChild.remove();
}

sortedList.forEach((item) => list.append(item));
getEmployees(list);
