'use strict';

const list = document.querySelector('ul');
const employeesList = [...list.children];

const sortEmployees = (people) => {
  const getSalary = (value) => (
    Number(value.dataset.salary.slice(1).split(',').join(''))
  );

  const sortedEmployees = people.sort((a, b) => getSalary(b) - getSalary(a));

  list.append(...sortedEmployees);
};

const getEmployees = (people) => people.map(
  person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  })
);

sortEmployees(employeesList);
getEmployees(employeesList);
