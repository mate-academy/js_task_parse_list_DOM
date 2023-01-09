'use strict';

const list = document.querySelector('ul');

const sortList = (listOfValue) => {
  const listWithNumber = [...listOfValue];

  function normalizeNumber(numberString) {
    return numberString.split(',').join('').slice(1);
  };

  for (const item of listWithNumber) {
    item.dataset.salary = normalizeNumber(item.dataset.salary);
  }

  let sort = listWithNumber.sort((a, b) => b.dataset.salary - a.dataset.salary);

  sort = sort.forEach(item => list.append(item));

  return sort;
};

function getEmployees(listOfValue) {
  const result = [...listOfValue].map(item => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));

  return result;
}

sortList(list.children);
getEmployees(list.children);
