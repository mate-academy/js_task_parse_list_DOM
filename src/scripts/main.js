'use strict';

const arrayOfEmployees = [...document.querySelectorAll('li')];

//function for sorting list of employees and chenching order in html document
function sortList(list) {
  const newList = arrayOfEmployees.sort(sorting);

  for (let i = 0; i < newList.length; i++) {
    document.body.append(newList[i]);
  }
}

//helping function to sort list by salary
function sorting(a, b) {
  const valueA = +a.getAttribute('data-salary').slice(1,-1).replace(',','');
  const valueB = +b.getAttribute('data-salary').slice(1,-1).replace(',','');

  return valueB - valueA;
}

//function to make array of employees object with information about them
function getEmployees(array) {
  const employeesList = [];

  for (let i = 0; i < array.length; i++ ) {
    const employee = {};
    employee.name = arrayOfEmployees[i].innerText;
    employee.position = arrayOfEmployees[i].getAttribute('data-position');
    employee.salary = arrayOfEmployees[i].getAttribute('data-salary');
    employee.age = arrayOfEmployees[i].getAttribute('data-age');
    employeesList.push(employee);
  }

  return employeesList;
}

//invoke fubctions
sortList(arrayOfEmployees);
getEmployees(arrayOfEmployees);
