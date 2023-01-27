'use strict';

let listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

const getNumber = (salary) => {
  return Number(salary.replace(',', '').replace('$', ''));
};

function sortList(argList) {
  return Array.from(argList).sort((person1, person2) => getNumber(
    person2.dataset.salary) - getNumber(person1.dataset.salary));
}

listItems = sortList(listItems);

for (const li of listItems) {
  list.append(li);
}

function getEmployees(argList) {
  const arrOfSortPersons = argList.map((item) => {
    const person = {

      name: item.innerHTML.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    return person;
  });

  return arrOfSortPersons;
}

getEmployees(listItems);
