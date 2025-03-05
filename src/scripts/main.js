'use strict';

const list = document.body.children[1];
const textCont = list.querySelectorAll('li');
const arrayList = [...textCont];

const people = arrayList.map((item) => ({
  name: item.textContent,
  position: item.getAttribute('data-position'),
  salary: item.getAttribute('data-salary'),
  age: item.getAttribute('data-age'),
}));

/* ==================================== */

function sortList(people) {
  const listForSalary = people.sort((a, b) => {
    a.replace(/[^0-9.-]+/g, '');
    b.replace(/[^0-9.-]+/g, '');

    return +b.salary - +a.salary
  });

  return listForSalary.map((item) => item.name);
}

sortlist(people);


function getEmployees(people) {
  return people.sort((a, b) => {
    a.replace(/[^0-9.-]+/g, '');
    b.replace(/[^0-9.-]+/g, '');

    return +b.salary - +a.salary
  });
}

getEmployees(people);
