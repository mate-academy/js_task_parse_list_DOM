'use strict';

const list = document.querySelectorAll('li');
const newSortedList = sortlist([...list]);
const newlistEmployees = getEmployees(newSortedList);

for (let i = 0; i < list.length; i++) {
  list[i].innerHTML = newlistEmployees[i].name;
  list[i].dataset.position = newlistEmployees[i].position;
  list[i].dataset.salary = newlistEmployees[i].salary;
  list[i].dataset.age = newlistEmployees[i].age;
}

function sortlist(sortedList) {
  const sortingList = sortedList.sort(
    (a, b) =>
      convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary),
  );

  return sortingList;
}

function getEmployees(listEmployees) {
  const newlistEml = [];

  listEmployees.map((item) => {
    newlistEml.push({
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });

    return item;
  });

  return newlistEml;
}

function convertToNumber(item) {
  const newItem = item.split(',').join('').slice(1);

  return parseInt(newItem);
}
