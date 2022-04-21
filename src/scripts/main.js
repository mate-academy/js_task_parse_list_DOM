'use strict';

const listCollection = document.querySelector('ul');
const employeesArray = [...listCollection.children];

const sortList = list => {
  const salaryToNumber = salary => salary.split(',').join('').substring(1);

  list.sort((a, b) => {
    return salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary);
  });

  for (const item of list) {
    listCollection.append(item);
  }
};

const getEmployees = list => {
  return list.map(el => ({
    name: el.outerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
};

sortList(employeesArray);
getEmployees(employeesArray);
