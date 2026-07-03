'use strict';

function getSalary(li) {
  return Number(li.dataset.salary.replace('$', '').replaceAll(',', ''));
}

function getEmployees(list) {
  const items = list.querySelectorAll('li');

  return Array.from(items).map(function(li) {

    const personname = li.dataset.name || li.textContent.trim();

    return {
      name: personname,
      position: li.dataset.position,
      salary: getSalary(li),
      age: Number(li.dataset.age)
    };
  });
}

function compareSalary(a, b) {

  return getSalary(b) - getSalary(a);
}

function sortList(list) {
  const items = list.querySelectorAll('li');
  const sorteditems = Array.from(items).sort(compareSalary);

  sorteditems.forEach(function(li) {
    list.append(li);
  });
}

const ul = document.querySelector('ul');
getEmployees(ul);

sortList(ul);
