'use strict';

const ul = document.querySelector('ul');

const salaryToNum = salaryString => Number(salaryString.replace(/\W/g, ''));

const sortList = list => {
  const sortedList = [...list].sort((a, b) => (
    salaryToNum(b.dataset.salary) - salaryToNum(a.dataset.salary)
  ));

  ul.append(...sortedList);
};

const getEmployees = list => (
  [...list].map(li => {
    const { position, salary, age } = li.dataset;

    return {
      name: li.innerHTML,
      position,
      salary,
      age,
    };
  })
);

sortList(ul.children);
getEmployees(ul.children);
