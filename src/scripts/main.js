'use strict';

const employeesCollection = document.querySelector('ul');
const employeesList = Array.from(employeesCollection.children);

function sortList(list, itemForSort) {
  list.sort((item1, item2) => {
    const itemNormalized = (item) => {
      return +item.dataset.salary.slice(1).split(',').join('');
    };

    return itemNormalized(item2) - itemNormalized(item1);
  });

  for (const key of list) {
    itemForSort.append(key);
  }
}

sortList(employeesList, employeesCollection);

function getEmployees(list) {
  return list.map((employee) => ({
    name: employee.innerText,
    position: employee.dataset.position,
    age: employee.dataset.age,
    salary: employee.dataset.salary,
  }));
}

getEmployees(employeesList)
