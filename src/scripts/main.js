'use strict';

const employees = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

const convertSalary = salary => {
  return +salary.replace(/[^+\d]/g, '');
};

const sortList = list => {
  return list.sort(
    (p1, p2) =>
      convertSalary(p2.dataset.salary) - convertSalary(p1.dataset.salary)
  );
};

ul.innerHTML = sortList(employees).map(person =>
  `<li
     data-position=${person.dataset.position} 
     data-salary=${person.dataset.salary} 
     data-age=${person.dataset.age}
   >
     ${person.textContent}
   </li>`)
  .join('');

const getEmployees = list => {
  return employees.map(person => (
    {
      name: person.textContent.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    }
  ));
};

getEmployees(employees);
