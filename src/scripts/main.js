/* eslint-disable max-len */
'use strict';

// write code here

function sortBySalary(employees) {
  const tempArray = [...employees];

  tempArray.sort((item1, item2) => {
    const salary1 = parseInt(item1.salary.replace(/[^0-9.-]+/g, ''));
    const salary2 = parseInt(item2.salary.replace(/[^0-9.-]+/g, ''));

    return salary1 - salary2;
  });

  return tempArray.reverse();
}

function createEmployeeObjects(liItems) {
  const objects = [];

  links.forEach((item) => {
    const employeename = item.innerText;
    const value = item.dataset.position;
    const salary = item.dataset.salary;
    const age = item.dataset.age;

    const employeeObject = {
      employeename,
      value,
      salary,
      age,
    };

    objects.push(employeeObject);
  });

  return objects;
}

const links = document.querySelectorAll('li');

const employeeArray = createEmployeeObjects(links);

const sortedBySalaryEmployees = sortBySalary(employeeArray);

for (let i = 0; i < sortedBySalaryEmployees.length; i++) {
  links[i].innerHTML = sortedBySalaryEmployees[i].employeename;
  links[i].dataset.position = sortedBySalaryEmployees[i].position;
  links[i].dataset.salary = sortedBySalaryEmployees[i].salary;
  links[i].dataset.age = sortedBySalaryEmployees[i].age;
}
