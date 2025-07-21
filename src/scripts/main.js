'use strict';

// write code here
'use strict';

const listOfEmployees = document.querySelectorAll('li');

function getEmployees(list) {
  return Array.from(list).map((li) => {
    const salary = Number(li.dataset.salary.replace(/[$,]/g, ''));

    return {
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: salary,
      age: Number(li.dataset.age),
      element: li,
    };
  });
}

function sortList(list) {
  const employees = getEmployees(list);

  employees.sort((a, b) => b.salary - a.salary);

  const listContainer = document.querySelector('ul');

  listContainer.innerHTML = '';

  employees.forEach((employee) => {
    listContainer.appendChild(employee.element);
  });
}

sortList(listOfEmployees);
