'use strict';

const employees = document.querySelectorAll('li');
const listOfEmployees = document.querySelector('ul');

function sortList(list, people) {
  const sortedListOfEmployees = getEmployees(people).sort((a, b) => {
    return salaryFormatter(a.salary) - salaryFormatter(b.salary);
  });

  list.innerHTML = '';

  for (let i = 0; i < sortedListOfEmployees.length; i++) {
    list.insertAdjacentHTML('afterbegin', `
      <li
        data-position="${sortedListOfEmployees[i].position}"
        data-salary="${sortedListOfEmployees[i].salary}"
        data-age="${sortedListOfEmployees[i].age}"
      >
        ${sortedListOfEmployees[i].name}
      </li>
    `);
  }
}

function salaryFormatter(salary) {
  return +salary.replace('$', '').replace(',', '');
};

function getEmployees(people) {
  return [...people].map(item => {
    return {
      name: item.innerText,
      ...item.dataset,
    };
  });
};

getEmployees(employees);

sortList(listOfEmployees, employees);
