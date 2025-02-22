'use strict';

const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

function sortList(list) {
  const allPersons = Array.from(list).sort(
    (a, b) =>
      Number(b.dataset.salary.slice(1).replaceAll(',', '')) -
      Number(a.dataset.salary.slice(1).replaceAll(',', '')),
  );

  return allPersons;
}

const sortFunction = sortList(li);

ul.innerHTML = '';
sortList(li).forEach((item) => ul.appendChild(item));

function getEmployees() {
  const result = [];

  Array.from(li).forEach((item) => {
    const age = item.dataset.age;
    const salary = item.dataset.salary;
    const position = item.dataset.position;

    result.push({
      name: item.textContent.trim(),
      position,
      salary,
      age,
    });
  });

  return result;
}

getEmployees(sortFunction);
