'use strict';

const pageList = document.querySelector('ul');

const sortList = (list) => {
  const copyChildren = [...list.children];

  copyChildren.sort((first, second) => {
    const getNormalizeSalary = (item) => {
      return +item.dataset.salary.slice(1).split(',').join('');
    };

    return getNormalizeSalary(second) - getNormalizeSalary(first);
  });

  copyChildren.forEach((employee) => list.append(employee));
};

const getEmployees = (list) =>
  [...list.children].map((employee) => ({
    name: employee.innerText,
    position: employee.dataset.position,
    age: employee.dataset.age,
    salary: employee.dataset.salary,
  }));

sortList(pageList);
getEmployees(pageList);
