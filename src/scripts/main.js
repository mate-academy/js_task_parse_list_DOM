'use strict';

const liElement = document.querySelectorAll('li');
const ulElement = document.querySelector('ul');

function convertNumber(value) {
  return +value.slice(1).replace(',', '');
}

function sortList(list) {
  return list.sort((firstEmployer, secondEmployer) => {
    return convertNumber(secondEmployer.dataset.salary) - convertNumber(
      firstEmployer.dataset.salary);
  });
}

const liSorted = sortList([...liElement]);

ulElement.append(...liSorted);

function employeList(incomingArray) {
  return incomingArray.map((employer) => {
    return {
      ...employer.dataset,
      name: employer.innerTeemployert,
    };
  });
}

employeList(liSorted);
