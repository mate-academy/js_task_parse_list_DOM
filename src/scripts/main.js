'use strict';

const salary = [...document.querySelectorAll('li')];
const listUl = document.querySelector('ul');

function sortSalary(list) {
  list.sort((a, b) => {
    return toNumber(b.dataset.salary) - toNumber(a.dataset.salary);
  });

  listUl.append(...list);
}

function toNumber(num) {
  return num.match(/[0-9]/g).join('');
}

function createPerson(person) {
  const allPerson = [];

  for (const key of person) {
    const personInfo = {
      name: key.innerHTML.trim(),
      position: key.dataset.position,
      salary: key.dataset.salary,
      age: key.dataset.age,
    };

    allPerson.push(personInfo);
  }

  return allPerson;
}

sortSalary(salary);
createPerson(salary);
