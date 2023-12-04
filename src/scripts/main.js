'use strict';

const lists = document.querySelectorAll('li');
const elemUl = document.querySelector('ul');

function sortList(nodes) {
  elemUl.innerHTML = '';

  const sortedList = [...nodes].sort((li1, li2) => {
    const salary1 = convertSalary(li1.dataset.salary);
    const salary2 = convertSalary(li2.dataset.salary);

    return salary2 - salary1;
  });

  sortedList.forEach(node => {
    elemUl.appendChild(node);
  });
}

function getEmployees(nodes) {
  return [...nodes].map(li => {
    const example = li.dataset;

    return {
      ...example,
      name: li.innerText,
    };
  });
}

function convertSalary(salary) {
  return +salary.slice(1).replace(',', '');
}

getEmployees(lists);
sortList(lists);
