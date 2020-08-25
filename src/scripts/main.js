'use strict';

const peoples = document.querySelector('ul');

const convertToNum = salary => +salary.slice(1).split(',').join('');

function sortList(employers) {
  const sortedPeoples = [...employers.children]
    .sort((a, b) =>
      convertToNum(b.dataset.salary) - convertToNum(a.dataset.salary));

  peoples.prepend(...sortedPeoples);
}

function getEmployees(employers) {
  const listEmployers = [...employers.children].map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));

  return listEmployers;
}

getEmployees(peoples);
sortList(peoples);
