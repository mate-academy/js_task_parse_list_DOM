'use strict';

const list = Array.from(document.querySelectorAll('ul li'));

function sortList() {
  function parseSalary(salaryString) {
    return parseFloat(salaryString.replace(/[$,]/g, ''));
  }

  list.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  const ul = document.querySelector('ul');

  list.forEach(li => ul.appendChild(li));
}

function getEmployees() {
  return list.map(li => ({
    name: li.textContent,
    position: li.dataset.position,
    salary: li.dataset.salary,
    age: parseInt(li.dataset.age),
  }));
}

sortList(list);

getEmployees(list);
