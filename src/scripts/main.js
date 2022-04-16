'use strict';

const entryList = document.querySelector('ul');
const employees = [...entryList.children];
const convert = salary => +salary.slice(1).split(',').join('');

function sortBySalary(list) {
  const sortedList = list.sort((smallest, biggest) =>
    convert(biggest.dataset.salary) - convert(smallest.dataset.salary)
  );

  entryList.append(...sortedList);
}

function sortIsEmployees(list) {
  return list.map(person => ({
    name: person.innerText,
    ...person.dataset,
  }));
}

sortBySalary(employees);
sortIsEmployees(employees);
