'use strict';

function convertSalary(salary) {
  return parseInt(salary.slice(1).split(',').join(''));
}

// this function was in tasks list
function getEmployersObjects(employers) {
  return [...employers].map(el => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: convertSalary(el.dataset.salary),
    age: parseInt(el.dataset.age),
  }));
}

function sortBySalary(list) {
  const employers = [...list.children];

  employers.sort(({ dataset: { salary: s1 } },
    { dataset: { salary: s2 } }) => {
    const salary1 = convertSalary(s1);
    const salary2 = convertSalary(s2);

    return salary2 - salary1;
  });

  employers.forEach(emp => listEl.insertAdjacentElement('beforeend', emp));
}

const listEl = document.querySelector('ul');

sortBySalary(listEl);
