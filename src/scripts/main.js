'use strict';

function convertNumber(n) {
  const result = n.split('').filter(el => !isNaN(el)).join('');

  return result;
}

const employeesList = document.querySelectorAll('li');

const employees = [...employeesList].map(function(person) {
  return {
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  };
});

employees.sort((a, b) => convertNumber(b.salary) - convertNumber(a.salary));

const list = document.querySelector('ul');

list.innerHTML = `
    ${employees.map(person => `<li>${person.name}</li>`).join('')}
`;
