/* eslint-disable max-len */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
'use strict';

function getEmployees() {
  const collection = document.getElementsByTagName('li');
  const list = [];

  for (let i = 0; i < collection.length; i++) {
    list.push(collection.item(i));
  }

  return list;
}

function sortList(employees) {
  employees.sort((employee1, employee2) => {

    const salary1 = salaryNormilaze(employee1['attributes']['data-salary']['value']);
    const salary2 = salaryNormilaze(employee2['attributes']['data-salary']['value']);

    // console.log(salary1);
    // console.log(salary2);

    return salary2 - salary1;
  });

  return employees;
}

function salaryNormilaze(salary) {
  const normilaizedSalary = salary.slice(1).split(',').join('');

  // console.log(salary);
  // console.log(normilaizedSalary);

  return parseInt(normilaizedSalary);
}

const listOfEmployees = getEmployees();

const sortedList = sortList(listOfEmployees);

for (let i = 0; i < sortedList.length; i++) {
  document.getElementsByTagName('li')[i].outerHTML = sortedList[i].outerHTML;
}
