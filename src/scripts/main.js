'use strict';

// write code here

const list = document.body.querySelectorAll('li');

function sortList(employees) {
  function convertToNumber(string) {
    const number = +string.slice(1).split(',').join('');

    return number;
  }

  const sortedList = [...employees].sort((a, b) =>
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary)
  );

  return sortedList.forEach(employee =>
    document.body.querySelector('ul').append(employee)
  );
}

function getEmployee(employees) {
  return [...employees].map((employee) => {
    const object = {};

    object.name = employee.innerText;
    object.position = employee.dataset.position;
    object.salary = employee.dataset.salary;
    object.age = employee.dataset.age;

    return object;
  });
}

sortList(list);
getEmployee(list);
