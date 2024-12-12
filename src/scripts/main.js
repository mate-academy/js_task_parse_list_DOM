'use strict';

let employeesList = [...document.querySelectorAll('li')];
let forget = employeesList;
const helper = (list) => {
  return list.map((x) => {
    return {
      salary: Number(x.dataset.salary.split(',').join('').slice(1)),
      element: x,
    };
  });
};

employeesList = helper(employeesList);

const sortList = (list) => {
  return list.sort((a, b) => b.salary - a.salary);
};

employeesList = sortList(employeesList);

const parentOfList = document.querySelector('ul');

parent.innerHTML = '';
employeesList.forEach((empl) => parentOfList.appendChild(empl.element));

const getEmployees = (list) => {
  return list.map((developer) => {
    return {
      name: developer.textContent,
      position: developer.dataset.position,
      salary: developer.dataset.salary,
      age: developer.dataset.age,
    };
  });
};

forget = getEmployees(forget);
alert(forget);
