'use strict';

const listOfEmployees = document.querySelector('ul');

sortNode(listOfEmployees);

function sortNode(list) {
  const employeeArray = Array.from(list.children);

  const sortedEmployeeArray = employeeArray.sort((employee1, employee2) => {
    const salary1 = parseFloat(
      employee1.dataset.salary.replace('$', '').replaceAll(',', ''),
    );
    const salary2 = parseFloat(
      employee2.dataset.salary.replace('$', '').replaceAll(',', ''),
    );

    return salary2 - salary1;
  });

  list.innerHTML = '';

  sortedEmployeeArray.forEach(employee => {
    list.appendChild(employee);
  });
}
