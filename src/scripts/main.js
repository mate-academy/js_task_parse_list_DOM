'use strict';

const nodeList = document.querySelectorAll('li');
const listEmployees = [...nodeList].map((employee) => ({
  name: employee.innerText,
  position: employee.dataset.position,
  salary: employee.dataset.salary.slice(1).split(',').join(''),
  age: employee.dataset.age,
}));

listEmployees.sort((a, b) => b.salary - a.salary);

for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].innerText = listEmployees[i].name;
  nodeList[i].dataset.position = listEmployees[i].position;
  nodeList[i].dataset.salary = listEmployees[i].salary;
  nodeList[i].dataset.age = listEmployees[i].age;
}
