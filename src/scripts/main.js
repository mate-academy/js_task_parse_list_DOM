'use strict';

const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  return list.sort((a, b) => {
    const salary1 = +a.getAttribute('data-salary').replace(/[$,]/g, '');
    const salary2 = +b.getAttribute('data-salary').replace(/[$,]/g, '');

    return salary2 - salary1;
  });
}

function getEmployees(list) {
  return list.map((employee) => {
    const fullName = employee.textContent;
    const position = employee.getAttribute('data-position');
    const salary = employee.getAttribute('data-salary');
    const age = employee.getAttribute('data-age');

    return {
      name: fullName,
      position,
      salary,
      age,
    };
  });
}

const sortedEmployees = sortList(employees);
const finalList = getEmployees(sortedEmployees);

const ul = document.querySelector('ul');

ul.innerHTML = '';

const listItems = finalList.map(({ name: fullName, position, salary, age }) => {
  const li = document.createElement('li');

  li.setAttribute('data-position', position);
  li.setAttribute('data-salary', salary);
  li.setAttribute('data-age', age);

  li.textContent = fullName;

  return li;
});

listItems.forEach((li) => {
  ul.appendChild(li);
});
