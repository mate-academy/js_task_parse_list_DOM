'use strict';

// write code here
const list = [...document.querySelectorAll('li')];

function sortList(listToSort) {
  const sortedList = listToSort.sort(
    (a, b) => salaryConverter(b) - salaryConverter(a),
  );

  sortedList.map((person) => {
    document.querySelector('ul').append(person);
  });
}

function salaryConverter(person) {
  return Number(person.dataset.salary.substring(1).replace(',', '.'));
}

function getEmployees(listToMakeObject) {
  const objectList = [];

  listToMakeObject.forEach((li) => {
    objectList.push({
      name: li.innerText,
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    });
  });

  return listToMakeObject;
}
sortList(list);
getEmployees(list);
