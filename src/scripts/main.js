'use strict';

const list = document.querySelectorAll('li');

const salaryToNumber = (string) => string.match(/\d+/g).join('');

function sortList(elements) {
  // const elementArray = Array.from(elements);

  // elementArray.sort((a, b) => {
  //   const x = salaryToNumber(b.getAttribute('data-salary'));
  //   const y = salaryToNumber(a.getAttribute('data-salary'));

  //   return x - y;
  // });

  // const ul = document.querySelector('ul');

  // elementArray.forEach(x => ul.appendChild(x));
  const ul = document.querySelector('ul');

  const sortedEmployees = [...elements].sort(
    (a, b) =>
      salaryToNumber(b.getAttribute('data-salary'))
      - salaryToNumber(a.getAttribute('data-salary'))
  );

  sortedEmployees.forEach((x) => ul.appendChild(x));

  return sortedEmployees;
}

sortList(list);

const getEmployees = (elements) =>
// function getEmployees(elements) {
  // const employeesList = [];

  // for (let i = 0; i < elements.length; i++) {
  //   employeesList.push({
  //     name: elements[i].innerText,
  //     position: elements[i].getAttribute('data-position'),
  //     salary: elements[i].getAttribute('data-salary'),
  //     age: elements[i].getAttribute('data-age'),
  //   });
   [...elements].map(element => ({
    name: element.innerText,
    position: element.getAttribute('data-position'),
    salary: element.getAttribute('data-salary'),
    age: element.getAttribute('data-age'),
  }));


  // return employeesList;
// }

// function salaryToNumber(string) {
//   return string.slice(1).replaceAll(',', '');
// }

// getEmployees(list);

function curry(firstCallback, secondCallback) {
  return function (...args) {
    return secondCallback(firstCallback(...args));
  };
}

const sortAndGetEmployees = curry(sortList, getEmployees);

sortAndGetEmployees(list);
