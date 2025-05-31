'use strict';

function getSalary(li) {
  const salaryStr = li.dataset.salary;
  const cleanStr = salaryStr.replace('$', '').replace(/,/g, '');

  return Number(cleanStr);
}

function sortList(getListElements) {
  const ul = listElements[0].parentNode;

  const sortedElements = [...getListElements].sort(
    (a, b) => getSalary(b) - getSalary(a),
  );

  ul.innerHTML = '';
  sortedElements.forEach((li) => ul.appendChild(li));
}

function getEmployees(getEmployeesListElements) {
  const getedEmployees = [];

  for (const li of getEmployeesListElements) {
    getedEmployees.push({
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    });
  }

  return getedEmployees;
}

// Отримуємо всі <li>
const listElements = document.querySelectorAll('li[data-salary]');

// Викликаємо функції
sortList(listElements);

getEmployees(listElements);
