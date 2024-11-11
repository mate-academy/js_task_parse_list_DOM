'use strict';

const listOfAll = [...document.querySelectorAll('li')];

function sortList(list) {
  const ul = document.querySelector('ul');

  list.sort((el1, el2) => {
    const salary1 = +el1.dataset.salary.slice(1).replace(',', '');
    const salary2 = +el2.dataset.salary.slice(1).replace(',', '');

    return salary2 - salary1;
  });

  list.forEach((li) => ul.append(li));
}

function getEmployees(list) {
  return list.map((li) => {
    const { age, salary, position } = li.dataset;

    return {
      name: li.textContent.trim(),
      position,
      salary,
      age,
    };
  });
}

sortList(listOfAll);
getEmployees(listOfAll);
