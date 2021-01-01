'use strict';

const salaryToNumber = function(salary) {
  return +salary.slice(1).split(',').join('');
};

const sortList = function(anylist) {
  return anylist.sort(
    (prev, next) =>
      salaryToNumber(next.dataset.salary)
      - salaryToNumber(prev.dataset.salary)
  );
};

const getEmployees = function(someList) {
  const workers = [];

  someList.forEach(
    function(el, i) {
      workers.push(
        {
          name: el.innerText,
          position: i + 1,
          salary: el.dataset.salary,
          age: el.dataset.age,
        }
      );
    }
  );

  return workers;
};

const employees = [...document.getElementsByTagName('li')];

sortList(employees);

const list = document.getElementsByTagName('ul')[0];

for (let i = 0; i < employees.length; i++) {
  list.append(employees[i]);
}

getEmployees(employees);
