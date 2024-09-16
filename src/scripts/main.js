'use strict';

const employees = document.querySelectorAll('li');

const sortList = function(list) {
  const copyOfList = Array.from(list);

  copyOfList.sort(
    (worker1, worker2) => salaryConverting(worker2.dataset.salary)
    - salaryConverting(worker1.dataset.salary));

  copyOfList.forEach(worker => document.querySelector('ul').append(worker));
};

function salaryConverting(salary) {
  return salary.slice(1).split(',').join('');
}

const getEmployees = function(list) {
  return list.map(employee => ({
    name: employee.textContent,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  })
  );
};

sortList(employees);
getEmployees(employees);
