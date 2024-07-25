'use strict';

const employeeListItems = Array.from(document.querySelectorAll('ul li'));

function sortList(a, b) {
  const salaryA = a.getAttribute('data-salary').replace(/[$,]/g, '');
  const salaryB = b.getAttribute('data-salary').replace(/[$,]/g, '');

  const salaryNumA = Number(salaryA);
  const salaryNumB = Number(salaryB);

  return salaryNumB - salaryNumA;
}

employeeListItems.sort(sortList);

const employeeList = document.querySelector('ul');

employeeList.innerHTML = '';

employeeListItems.forEach((li) => {
  employeeList.appendChild(li);
});

function getEmployees(list) {
  return Array.from(list).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: li.dataset.salary,
    age: li.dataset.age,
  }));
}

getEmployees(employeeListItems);
