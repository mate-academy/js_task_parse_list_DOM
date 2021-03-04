'use strict';

const liElement = document.querySelectorAll('li');
const ulElement = document.querySelector('ul');

function creatingNumbers(value) {
  return +value.slice(1).replace(',', '');
}

function sotList(incomingList) {
  return incomingList.sort((a, b) => {
    return creatingNumbers(b.dataset.salary) - creatingNumbers(
      a.dataset.salary);
  });
}

const liElementArray = [...liElement];

const liSorted = sotList(liElementArray);

ulElement.append(...liSorted);

function employeList(incomingArray) {
  return incomingArray.map((x) => {
    return {
      ...x.dataset,
      name: x.innerText,
    };
  });
}

employeList(liSorted);
