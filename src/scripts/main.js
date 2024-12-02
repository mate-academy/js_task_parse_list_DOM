'use strict';

const listItems = document.querySelectorAll('li');

function sortList(list) {
  list.sort((person1, person2) => person2.salary - person1.salary);

  list.forEach((employee, index) => {
    const li = listItems[index];

    li.textContent = employee.name;

    // Обновляем атрибуты
    li.setAttribute('data-position', employee.position);

    li.setAttribute(
      'data-salary',
      `$${employee.salary.toLocaleString('en-US')}`,
    );
    li.setAttribute('data-age', employee.age);
  });
}

function getEmployees(list) {
  const employee = Array.from(list).map((person) => {
    return {
      name: person.textContent.trim(),
      position: person.dataset.position,
      salary: stringToNum(person.dataset.salary),
      age: person.dataset.age,
    };
  });

  return employee;
}

function stringToNum(str) {
  return parseInt(str.replace(/[^0-9]/g, ''), 10);
}

sortList(getEmployees(listItems));
