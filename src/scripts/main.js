'use strict';

let list = document.querySelectorAll('li');

const getNumber = (salary) => {
  return Number(salary.replace(',', '').replace('$', ''));
};

function sortList(argList) {
  return Array.from(argList).sort((person1, person2) => getNumber(
    person2.dataset.salary) - getNumber(person1.dataset.salary));
}

list = sortList(list);

function getEmployees(argList) {
  const arrOfSortObjects = argList.map(function(item) {
    const obj = {

      name: item.innerHTML.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    return obj;
  });

  return arrOfSortObjects;
}

getEmployees(list);
