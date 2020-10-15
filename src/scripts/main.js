'use strict';

const listOfPeople = document.querySelector('ul');

function getSalary(element) {
  return +(element.dataset.salary.replace(/\$|,/g, ''));
}

function sortList(list) {
  const sortedList = [...list.children]
    .sort((a, b) => getSalary(b) - getSalary(a));

  list.innerHTML = '';
  sortedList.forEach(element => list.appendChild(element));
}

function getEmployees(list) {
  return [...list.children].map(person => {
    return {
      name: person.textContent.trim(),
      position: person.dataset.position,
      salary: getSalary(person),
      age: +person.dataset.age,
    };
  });
}

sortList(listOfPeople);
getEmployees(listOfPeople);
