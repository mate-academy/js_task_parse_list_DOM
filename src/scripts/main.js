'use strict';

const names = document.querySelectorAll('li');

function sortBySalary(nodeList) {
  const array = [...nodeList];

  array.sort((a, b) => {
    const normalizedA = +a.dataset.salary
      .replaceAll('$', '')
      .replaceAll(',', '');
    const normalizedB = +b.dataset.salary
      .replaceAll('$', '')
      .replaceAll(',', '');

    return normalizedB - normalizedA;
  });

  const parentUl = nodeList[0].parentNode;

  array.forEach((node) => parentUl.appendChild(node));
}

function createArrayOfObjects(nodeList) {
  return [...nodeList].map((el) => ({
    name: el.textContent.replaceAll('\n', '').replaceAll(' ', ''),
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
}

sortBySalary(names);
createArrayOfObjects(names);
