'use strict';
const list = document.querySelectorAll('li');

let listOfEmployees = [...list].map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: Number(person.dataset.salary.replace(/[\,\$]/g, '')),
    age: Number(person.dataset.age),
}));

const sortList = (list) => {
    return list.sort((a, b) => b.salary - a.salary);

};

let sortListOfEmployees = sortList(listOfEmployees);

const getEmployees = (sortListOfEmployees) => {
  for (let i = 0; i < sortListOfEmployees.length; i++) {
    list[i].innerText = sortListOfEmployees[i].name;
    list[i].dataset.position = sortListOfEmployees[i].position;
    list[i].dataset.salary
      = `$${sortListOfEmployees[i].salary.toLocaleString('en-US')}`;
    list[i].dataset.age = sortListOfEmployees[i].age;
  };
};

getEmployees(sortListOfEmployees);

