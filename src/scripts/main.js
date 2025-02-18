'use strict';

function getEmployees() {
  const employees = [];
  const listItems = document.querySelectorAll('ul li');

  listItems.forEach((item) => {
    const employeeName = item.textContent.trim();
    const position = item.getAttribute('data-position');
    const salary = parseInt(
      item.getAttribute('data-salary').replace(/\$|,/g, ''),
      10,
    );
    const age = item.getAttribute('data-age');

    employees.push({
      employeeName,
      position,
      salary,
      age,
    });
  });

  return employees;
}

function sortList() {
  const employees = getEmployees();
  const sortedList = employees.sort((a, b) => b.salary - a.salary);
  const list = document.querySelector('ul');

  list.innerHTML = '';

  sortedList.forEach((employee) => {
    const li = document.createElement('li');

    li.textContent = employee.employeeName;
    li.setAttribute('data-position', employee.position);
    li.setAttribute('data-salary', employee.salary);
    li.setAttribute('data-age', employee.age);

    list.appendChild(li);
  });
}

getEmployees();
sortList();
