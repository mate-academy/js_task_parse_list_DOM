'use strict';

const listBlock = document.querySelector('ul');
const listArray = Array.from(document.querySelectorAll('li'));

const personSalary = (el) => (
  (el.dataset.salary)
    .slice(1)
    .split(',')
    .join('')
);

const sortList = (list) => {
  list.sort((a, b) => personSalary(b) - personSalary(a));

  return listBlock.append(...list);
};

const getEmployees = (list) => {
  return list.map(person => (
    {
      name: person.textContent.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    }
  ));
};

sortList(listArray);
getEmployees(listArray);
