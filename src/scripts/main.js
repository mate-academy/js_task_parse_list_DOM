'use strict';

function convertToNum(num) {
  return num.split(',').join('').split('$').join('');
};

function sortBySalary(list) {
  const sorted = [...list].sort(function(a, b) {
    const FirstSalary = convertToNum(a.dataset.salary);

    const SecondSalary = convertToNum(b.dataset.salary);

    return +SecondSalary - +FirstSalary;
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
