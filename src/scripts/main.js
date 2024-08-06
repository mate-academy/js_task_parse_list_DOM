'use strict';

function getSalaryValue(element) {
  const salary = element.getAttribute('data-salary');

  return salary ? parseFloat(salary.replace(/[$,]/g, '')) : 0;
}

function sortList(list) {
  return [...list].sort((a, b) => getSalaryValue(b) - getSalaryValue(a));
}

function getEmployees(list) {
  return list.map((employee) => ({
    name: employee.innerText,
    position: employee.getAttribute('data-position') || '',
    salary: getSalaryValue(employee),
    age: +employee.getAttribute('data-age') || 0,
  }));
}

const updateList = (sortedList, ul) => {
  const fragment = document.createDocumentFragment();

  sortedList.forEach((li) => {
    fragment.appendChild(li);
  });
  ul.innerHTML = '';
  ul.appendChild(fragment);
};

const employees = document.querySelectorAll('li[data-salary]');

if (employees.length > 0) {
  const sortedList = sortList(employees);
  const ul = employees[0].parentElement;

  updateList(sortedList, ul);
  getEmployees(sortedList);
}
