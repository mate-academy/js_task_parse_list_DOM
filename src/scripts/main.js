'use strict';

const workersList = function() {
  const wokersData = document.querySelectorAll('li');

  return [...wokersData].map(
    worker => (Object.assign({ name: worker.innerText }, worker.dataset)
    ));
};

const sortedList = sortEmploees(workersList());

const list = document.querySelector('ul');

list.innerHTML = `
  ${sortedList.map(el => `
    <li
      data-position="${el.position}"
      data-salary="${el.salary}"
      data-age="${el.age}"
    >
      ${el.name}
    </li>
  `).join('')}
`;

function sortEmploees(emploees) {
  return emploees.sort(
    ({ salary: a }, { salary: b }) => getNumber(b) - getNumber(a)
  );
}

function getNumber(str) {
  return +str.slice(1).split(',').join('');
}
