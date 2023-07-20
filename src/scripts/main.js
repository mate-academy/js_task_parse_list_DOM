'use strict';

const list = document.querySelectorAll('li');

function sortList(elements) {
  const elementArray = Array.from(elements);

  elementArray.sort((a, b) => {
    const x = salaryToNumber(b.getAttribute('data-salary'));
    const y = salaryToNumber(a.getAttribute('data-salary'));

    return x - y;
  });

  const ul = document.querySelector('ul');

  elementArray.forEach(x => ul.appendChild(x));
}

sortList(list);

function getEmployees(elements) {
  const employeesList = [];

  for (let i = 0; i < elements.length; i++) {
    employeesList.push({
      name: elements[i].innerText,
      position: elements[i].getAttribute('data-position'),
      salary: elements[i].getAttribute('data-salary'),
      age: elements[i].getAttribute('data-age'),
    });
  }

  return employeesList;
}

function salaryToNumber(string) {
  return string.slice(1).replaceAll(',', '');
}

getEmployees(list);
