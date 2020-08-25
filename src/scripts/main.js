'use strict';

// write code here
const personsList = document.querySelectorAll('li');
const persons = [...personsList];

function sortList(list) {
  return list.sort((a, b) => {
    const salaryA = extractSalary(a.dataset.salary);
    const salaryB = extractSalary(b.dataset.salary);

    return salaryB - salaryA;
  });
}

const extractSalary = salary => salary.slice(1).split(',').join('');

const sortedPersons = sortList(persons);
const initialList = document.querySelector('ul');

initialList.append(...sortedPersons);

function getEmployees(list) {
  return list.map(person => (
    {
      name: person.innerText,
      ...person.dataset,
    }
  ));
}

getEmployees(persons);
