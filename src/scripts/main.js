'use strict';
// Calculating functions

const getEmployees = list => {
  const rightObjects = [];

  for (const employee of list) {
    const obj = {
      name: employee.innerHTML,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };

    obj.name = obj.name.split('\n')[1].trim();
    obj.salary = obj.salary.split('').slice(1).join('').split(',').join('');
    obj.salary = Number(obj.salary);

    rightObjects.push(obj);
  }

  return rightObjects;
};

const sortList = list => {
  return list.sort((a, b) => b.salary - a.salary);
};

// Main code
const liArray = document.querySelectorAll('li[data-salary]');

const arrayOfObjects = getEmployees(liArray);
const sortedEmployees = sortList(arrayOfObjects);

const ul = document.querySelector('ul');

ul.innerHTML = `
  ${sortedEmployees.map(employee => `
    <li
      data-position="${employee.position}"
      data-salary="$${employee.salary}"
      data-age="${employee.age}"
    >
      ${employee.name}
    </li>`).join('')}
`;
