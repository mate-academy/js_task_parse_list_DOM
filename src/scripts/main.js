'use strict';

// write code here

document.addEventListener('DOMContentLoaded', function () {
  const employees = [];
  const listItems = document.querySelectorAll('ul li');

  listItems.forEach(function (item) {
    const nameOfEmployee = item.textContent.trim();
    const position = item.getAttribute('data-position');
    const salary = parseFloat(
      item.getAttribute('data-salary').replace(/[$,]/g, ''),
    );
    const age = parseInt(item.getAttribute('data-age'), 10);

    employees.push({
      nameOfEmployee,
      position,
      salary,
      age,
    });
  });

  function sortEmploeesBySalary(employeesArray) {
    return employeesArray.sort((a, b) => b.salary - a.salary);
  }

  const sortedEmployees = sortEmploeesBySalary([...employees]);

  function updateDOMWithSortedEmployees(sortedList) {
    const ul = document.querySelector('ul');

    ul.innerHTML = '';

    sortedList.forEach((employee) => {
      const li = document.createElement('li');

      li.setAttribute('data-position', employee.position);
      li.setAttribute('data-salary', `$${employee.salary.toLocaleString()}`);
      li.setAttribute('data-age', employee.age);
      li.textContent = employee.nameOfEmployee;
      ul.appendChild(li);
    });
  }

  updateDOMWithSortedEmployees(sortedEmployees);
});
