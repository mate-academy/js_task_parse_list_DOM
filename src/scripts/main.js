'use strict';

const listItems = document.querySelectorAll('li');

function getNumber(salary) {
  return +salary.slice(1).split(',').join('');
}

const sortList = (list) => {
  const sortedList = [...list].sort((a, b) => {
    const aSalary = getNumber(a.dataset.salary);
    const bSalary = getNumber(b.dataset.salary);

    return bSalary - aSalary;
  });

  const ul = document.querySelector('ul');

  sortedList.map(item => ul.appendChild(item));
};

function getEmployees([...items]) {
  return items.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    are: person.dataset.age,
  }));
}

sortList(listItems);
getEmployees(listItems);
