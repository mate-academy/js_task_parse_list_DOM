'use strict';
  

function sortList(list) {
  const coletion = [...list];

  coletion.sort((a, b) => -(Number(a.dataset.salary.replace(/[\$,]/g, '')) 
    - Number(b.dataset.salary.replace(/[\$,]/g, ''))));

  coletion.forEach(el => document.querySelector('ul').append(el));
}

function getEmployees(list) {
  const employees = [];

  list.forEach(el => {
    const employee = {};

    employee.name = el.textContent;
    employee.position = el.dataset.position;
    employee.salary = el.dataset.salary;
    employee.age = el.dataset.age;
    
    employees.push(employee);
  })
  console.log(employees);
}
sortList(document.querySelectorAll('li'));

getEmployees(document.querySelectorAll('li'));