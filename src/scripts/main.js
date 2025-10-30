'use strict';

function sortList(workers) {
  function getNumber(str) {
    const strOfNaum = str.replaceAll(/[^0-9]/g, '');
    const num = +strOfNaum;

    return num;
  }

  workers.sort((a, b) => {
    const numA = getNumber(a.dataset.salary);
    const numB = getNumber(b.dataset.salary);

    return numB - numA;
  });

  const list = document.querySelector('ul');

  workers.forEach((li) => list.append(li));
}

function getEmployees(employees) {
  return employees.map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.getAttribute('data-position'),
    salary: employee.getAttribute('data-salary'),
    age: employee.getAttribute('data-age'),
  }));
}

const collectionWorkers = document.querySelectorAll('li');
const workersArr = Array.from(collectionWorkers);

sortList(workersArr);
getEmployees(workersArr);
