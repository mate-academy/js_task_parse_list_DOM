'use strict';

const list = Array.from(document.querySelectorAll('ul li'));

function sortList() {
  const parseSalary = (salaryString) => {
    return parseFloat(salaryString.replace(/[$,]/g, ''));
  };

  list.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  const ul = document.querySelector('ul');

  list.forEach(li => ul.appendChild(li));
}

function getEmployees() {
  return list.map(({ textContent, dataset }) => ({
    name: textContent,
    position: dataset.position,
    salary: dataset.salary,
    age: parseInt(dataset.age),
  }));
}

sortList();

getEmployees();
