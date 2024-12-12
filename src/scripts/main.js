'use strict';

const list = document.querySelector('ul');

function sortList() {
  const listItems = [...list.children];

  const getSalary = (str) => {
    return +str.slice(1).split(',').join('');
  };

  list.append(
    ...listItems.sort((employee1, employee2) => {
      return employee1.dataset.salary
        ? getSalary(employee2.dataset.salary) -
            getSalary(employee1.dataset.salary)
        : 0;
    }),
  );
}

function getEmployees() {
  const listArr = [];

  [...list.children].forEach((employee) => {
    listArr.push({
      name: employee.innerText,
      ...employee.dataset,
    });
  });

  return listArr;
}

addEventListener('DOMContentLoaded', () => {
  sortList();
  getEmployees();
});
