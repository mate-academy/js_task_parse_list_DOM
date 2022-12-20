'use strict';

const employees = document.querySelector('ul');

const listEmployees = [...employees.children];

const sorted = listEmployees.sort((a, b) => {
  return sallary(a) - sallary(b);
});

function sallary(value) {
  const noDollar = value.dataset.salary.split('$').join('');
  const salary = noDollar.split(',').join('');

  return (salary);
}

employees.innerHTML = '';

for (const sort in sorted) {
  employees.prepend(sorted[sort]);
}

function getEmployee(list) {
  const result = [];
  const arrayObj = [...list].map((person) => ({
    name: person.textContent.trim(),
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));

  result.push(arrayObj);

}

getEmployee(listEmployees);
