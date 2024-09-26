'use strict';

function numStr(num) {
  return +num.split(',').join('').split('$').join('');
};

function sortBySalary(list) {
  const sorted = [...list].sort(function(a, b) {
    const firstSalary = numStr(a.dataset.salary);

    const secondSalary = numStr(b.dataset.salary);

    return secondSalary - firstSalary;
  });

  document.querySelector('ul').append(...sorted);
}

function employeesObjects(list) {
  const employees = [];

  list.forEach(element => {
    const nameObj = element.innerHTML.trim();
    const position = element.dataset.position;
    const salary = element.dataset.salary;
    const age = element.dataset.age;

    employees.push(
      {
        name: nameObj,
        position: position,
        salary: salary,
        age: age,
      }
    );
  });

  return employees;
}

employeesObjects(document.querySelectorAll('li'));
sortBySalary(document.querySelectorAll('li'));
