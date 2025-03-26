'use strict';

const foundItems = [...document.querySelectorAll('li')];

function convertStringIntoNumber(string) {
  return +string.slice(1).split(',').join('');
}

function sortList(list) {
  return list.sort(
    (elem1, elem2) =>
      convertStringIntoNumber(elem2.dataset.salary) -
      convertStringIntoNumber(elem1.dataset.salary),
  );
}

function getEmployees(list) {
  return sortList(list).map((elem) => {
    const obj = {
      name: elem.innerText,
      position: elem.dataset.position,
      age: elem.dataset.age,
      salary: elem.dataset.salary,
    };

    return obj;
  });
}

document.querySelectorAll('li').forEach((elem) => elem.remove());

getEmployees(foundItems).forEach((elem) => {
  const newElem = document.createElement('li');

  newElem.textContent = elem.name;
  newElem.dataset.position = elem.position;
  newElem.dataset.age = elem.age;
  newElem.dataset.salary = elem.salary;

  document.querySelector('ul').insertAdjacentElement('beforeend', newElem);
});
