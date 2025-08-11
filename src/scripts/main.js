'use strict';

// write code here
const ul = document.querySelector('ul');

function sortList(list) {
  const listItems = list.querySelectorAll('li');

  return [...listItems].sort(
    (obj1, obj2) =>
      dataToNumber(obj2.dataset.salary) - dataToNumber(obj1.dataset.salary),
  );
}

function getEmployees(list) {
  const listItems = list.querySelectorAll('li');

  return [...listItems].map((person) => {
    return {
      name: person.textContent.trim(),
      position: person.dataset.position,
      salary: dataToNumber(person.dataset.salary),
      age: Number(person.dataset.age),
    };
  });
}

function dataToNumber(dataAttribute) {
  return Number(dataAttribute.slice(1).replace(/,/g, ''));
}

const sortedEmployess = sortList(ul);

getEmployees(ul);

sortedEmployess.forEach((element) => {
  ul.append(element);
});
