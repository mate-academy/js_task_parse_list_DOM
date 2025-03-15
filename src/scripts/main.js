'use strict';

// write code here
const employeesList = document.querySelectorAll('.list li');

function sortList(list, salaryKey = 'data-salary') {
  const arrayList = Array.from(list);

  return arrayList.sort((a, b) => {
    const salaryA = parseFloat(a.getAttribute(salaryKey).slice(1));
    const salaryB = parseFloat(b.getAttribute(salaryKey).slice(1));

    return salaryB - salaryA;
  });
}

function getEmployees(list) {
  return Array.from(list).map((person) => {
    return {
      element: person,
      name: person.textContent,
      position: person.getAttribute('data-position'),
      salary: person.getAttribute('data-salary'),
      age: person.getAttribute('data-age'),
    };
  });
}

getEmployees(employeesList);

const sortedEmployees = sortList(employeesList);

const listContainer = document.querySelector('.list');

listContainer.innerHTML = '';

sortedEmployees.forEach((employee) => {
  listContainer.appendChild(employee);
});
