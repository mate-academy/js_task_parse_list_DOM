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

const sortedList = sortList(li);

ul.innerHTML = '';
sortedList.forEach((item) => ul.appendChild(item));

function getEmployees(arr) {
  const result = [];

  Array.from(arr).forEach((item) => {
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

getEmployees(sortedList);
