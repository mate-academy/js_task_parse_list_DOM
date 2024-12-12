'use strict';

const list = document.querySelector('ul');

function sortList() {
  const listItems = [...list.children];

  const getSalary = (str) => {
    return +str.slice(1).replaceAll(',', '');
  };

  list.append(
    ...listItems.sort((employee1, employee2) => {
      return (
        getSalary(employee2.dataset.salary) -
        getSalary(employee1.dataset.salary)
      );
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

sortList();
getEmployees();
