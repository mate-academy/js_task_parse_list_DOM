'use strict';

const pageList = document.querySelector('ul');

function normalize(stringSalary) {
  return +stringSalary.split(',').join('').slice(1);
}

function sortList(list) {
  const copyEmployeesChilds = [...list.children];

  copyEmployeesChilds.sort((a, b) => {
    return normalize(b.dataset.salary) - normalize(a.dataset.salary);
  });

  copyEmployeesChilds.forEach((employee) => list.append(employee));
}

function getEmployees(list) {
  return [...list.children].reduce((array, child) => {
    array.push({
      name: child.innerText,
      position: child.dataset.position,
      age: child.dataset.age,
      salary: child.dataset.salary,
    });

    return array;
  }, []);
}

sortList(pageList);
getEmployees(pageList);
