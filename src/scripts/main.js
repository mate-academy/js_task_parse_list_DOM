'use strict';

function convertToNumber(salary) {
  const number = parseFloat(salary.replace('$', '').replaceAll(',', ''));

  return number;
}

const mainList = document.querySelector('ul');

function sortList(list) {
  [...list.querySelectorAll('li')]
    .sort((a, b) => {
      const convertA = convertToNumber(a.dataset.salary);
      const convertB = convertToNumber(b.dataset.salary);

      return convertB - convertA;
    })
    .forEach(li => list.appendChild(li));
}

function getEmploees(list) {
  [...list.querySelectorAll('li')]
    .map(item => ({
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    }));
}

sortList(mainList);
getEmploees(mainList);
