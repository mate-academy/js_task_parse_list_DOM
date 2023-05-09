'use strict';

const list = document.querySelector('ul');
const employeesList = [...list.children];

const sortList = (people) => {
  const getSalary = (value) => (
    +value.dataset.salary.slice(1).replaceAll(',', '')
  );

  const sortedEmployees = people.sort((a, b) => getSalary(b) - getSalary(a));

  list.append(...sortedEmployees);
};

const getEmployees = (people) => {
  return people.map(person => ({
    name: person.innerText,
    position: person.dataset.positon,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
};

sortList(employeesList);
getEmployees(employeesList);
