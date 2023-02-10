'use strict';

const li = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function toNumber(string) {
  return +string.replace('$', '').replaceAll(',', '');
}

function sortList(list) {
  const sortedList = [...list].sort((a, b) => {
    const salaryA = toNumber(a.dataset.salary);
    const salaryB = toNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  while (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
  }

  sortedList.forEach(element => {
    const person = document.createElement('li');

    person.innerText = element.innerText.trim();
    ul.append(person);
  });
}

function getEmployees(list) {
  return list.reduce((acc, person) => {
    return [
      ...acc,
      {
        name: person.innerText,
        position: person.dataset.position,
        salary: person.dataset.salary,
        age: person.dataset.age,
      },
    ];
  }, []);
}

getEmployees(li);
sortList(li);
