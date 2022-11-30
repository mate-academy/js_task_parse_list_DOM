'use strict';

const list = document.getElementsByTagName('li');

function getEmployees(listProperty) {
  const employees = [];

  for (const employee of listProperty) {
    employees.push({
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    });
  }

  return employees;
}

function sortList(listProperty) {
  const sort = getEmployees(listProperty).sort((a, b) =>
    convertToNum(b.salary) - convertToNum(a.salary)
  );

  for (let i = 0; i < listProperty.length; i++) {
    listProperty[i].dataset.position = sort[i].position;
    listProperty[i].dataset.salary = sort[i].salary;
    listProperty[i].dataset.age = sort[i].age;
    listProperty[i].innerText = sort[i].name;
  }
}

sortList(list);

function convertToNum(string) {
  return +(string.slice(1).replace(',', '.'));
}
