'use strict';

const list = document.querySelectorAll('li');

function getNum(string) {
  return +string.replace(/[$,]/g, '');
}

function sortList(li) {
  const sortPerson = [...li].sort((a, b) =>
    getNum(b.dataset.salary) - getNum(a.dataset.salary));

  document.querySelector('ul').append(...sortPerson);
}

function getEmployees(li) {
  const employeesArr = [...li].map(person => {
    return {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });

  return employeesArr;
}

sortList(list);
getEmployees(list);
