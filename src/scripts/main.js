'use strict';

const employees = document.querySelectorAll('li');

const sortList = function([...list]) {
  list.sort(
    (worker1, worker2) => salaryToNumber(worker2.dataset.salary)
    - salaryToNumber(worker1.dataset.salary));

  list.forEach(worker => document.querySelector('ul').append(worker));
};

function salaryToNumber(salary) {
  return salary.slice(1).split(',').join('');
}

const getEmployees = function([...list]) {
  return list.map(employee => {
    return {
      name: employee.textContent,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
};

sortList(employees);
getEmployees(employees);
