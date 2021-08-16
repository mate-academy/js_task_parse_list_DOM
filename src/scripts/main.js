'use strict';

function sortBySalary(people) {
  const sorted = [...people.children].sort(({ dataset: x }, { dataset: y }) =>
    salaryToNumber(y.salary) - salaryToNumber(x.salary)
  );

  sorted.forEach(employee => list.append(employee));
}

const salaryToNumber = (salaryString) => {
  return +salaryString.replace(/[$,]/g, '');
};

function getEmployeeObjects(people) {
  return [...people.children].map(({ innerText, dataset }) => ({
    name: innerText,
    position: dataset.position,
    salary: dataset.salary,
    age: dataset.age,
  }));
}

const list = document.querySelector('ul');

getEmployeeObjects(list);
sortBySalary(list);
