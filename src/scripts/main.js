'use strict';

const arrLi = [...document.querySelectorAll('li')];

sortList(arrLi);
getEmployees(arrLi);

function sortList(list) {
  const ul = document.querySelector('ul');

  list.sort((li1, li2) => {
    const salary1 = parseFloat(li1.dataset.salary.slice(1));
    const salary2 = parseFloat(li2.dataset.salary.slice(1));

    return salary2 - salary1;
  });

  ul.innerHTML = '';
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
