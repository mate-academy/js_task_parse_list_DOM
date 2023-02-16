'use strict';

const list = document.querySelector('ul');
const employeeList = [...list.querySelectorAll('li')];

function convertIntoNumber(string) {
  return +string.slice(1).replace(',', '');
}

const sortList = function(arr) {
  const sortedArray = [...arr].sort((employee1, employee2) => {
    return convertIntoNumber(employee2.dataset.salary)
    - convertIntoNumber(employee1.dataset.salary);
  });

  list.innerHTML = '';

  for (const li of sortedArray) {
    list.append(li);
  }
};

const getEmployees = function(arr) {
  return arr.map(value => {
    return {
      name: value.innerText,
      position: value.dataset.position,
      salary: value.dataset.salary,
      age: value.dataset.age,
    };
  });
};

sortList(employeeList);
getEmployees(employeeList);
