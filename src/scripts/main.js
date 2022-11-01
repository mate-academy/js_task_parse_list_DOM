'use strict';

const employees = [...document.querySelectorAll('li')];

const sortList = (list) => {
  const sorted = sortSalary(list);

  sorted.forEach(el => {
    el.parentElement.append(el);
  });
};

const sortSalary = (list) => {
  return list.sort((a, b) => {
    const first = formatData(a.dataset.salary);
    const second = formatData(b.dataset.salary);

    return second - first;
  });
};

const formatData = (element) => {
  return +element
    .split('')
    .filter(el => '0123456789'.includes(el))
    .join('');
};

const getEmployees = (list) => {
  return list.map(el => {
    return new Employee(
      el.innerText,
      el.dataset.position,
      el.dataset.salary,
      el.dataset.age
    );
  });
};

class Employee {
  constructor(fullName, position, salary, age) {
    this.name = fullName;
    this.position = position;
    this.salary = salary;
    this.age = age;
  }
}

sortList(employees);
getEmployees(employees);
