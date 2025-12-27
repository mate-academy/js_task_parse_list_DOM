'use strict';

const employeeList = document.querySelector('ul');
const employees = Array.from(employeeList.children);

const employeesBySalary = sortList(employees, 'salary');
const employeeData = getEmployees(employeesBySalary);

const cardsContainer = document.createElement('div');

employeeData.forEach((emp) => {
  const card = document.createElement('div');

  card.innerHTML = `
    <h3>${emp.name}</h3>
    <p>Position: ${emp.position}</p>
    <p>Salary: $${emp.salary.toLocaleString()}</p>
    <p>Age: ${emp.age}</p>
  `;
  cardsContainer.appendChild(card);
});

document.body.appendChild(cardsContainer);

function sortList(list, criteria) {
  const sorted = list.sort(
    (a, b) =>
      parseNumber(b.dataset[criteria]) - parseNumber(a.dataset[criteria]),
  );

  employeeList.replaceChildren(...sorted);

  return sorted;
}

function getEmployees(list) {
  return list.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset['position'],
    salary: parseNumber(li.dataset['salary']),
    age: parseNumber(li.dataset['age']),
  }));
}

function parseNumber(numStr) {
  return Number(numStr.replace(/\D/g, ''));
}
