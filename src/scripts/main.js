'use strict';

const list = document.querySelectorAll('li');

function sortList(element) {
  const elementArray = Array.from(element);

  elementArray.sort((a, b) => {
    let x = b.getAttribute('data-salary').substring(1);

    x = Number(x.replace(',', ''));

    let y = a.getAttribute('data-salary').substring(1);

    y = Number(y.replace(',', ''));

    return x - y;
  });

  const ul = document.querySelector('ul');

  elementArray.forEach(x => ul.appendChild(x));
}

sortList(list);

function getEmployees(element) {
  const employeesList = [];

  for (let i = 0; i < element.length; i++) {
    employeesList.push({
      name: element[i].innerText,
      position: element[i].getAttribute('data-position'),
      salary: element[i].getAttribute('data-salary'),
      age: element[i].getAttribute('data-age'),
    });
  }

  return employeesList;
}

getEmployees(list);
