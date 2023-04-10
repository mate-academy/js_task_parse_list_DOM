'use strict';

const list = document.querySelectorAll('li');
const ul = document.querySelector('ul');

function sortBySalary(l) {
  function convertToNumber(str) {
    return parseInt(str.replace(/\D/g, ''));
  }

  const sortList = [...list].sort((a, b) => {
    const salaryA = convertToNumber(a.dataset.salary);
    const salaryB = convertToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  return sortList;
}

function getEmployees(l) {
  const empl = [];

  list.forEach(item => {
    empl.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  });

  return empl;
}

const sortedList = sortBySalary(list);
const employees = getEmployees(sortedList);

ul.innerHTML = '';

employees.forEach(item => {
  const li = document.createElement('li');

  li.textContent = item.name;
  li.setAttribute('data-name', item.name);
  li.setAttribute('data-position', item.position);
  li.setAttribute('data-salary', item.salary);
  li.setAttribute('data-age', item.age);
  ul.appendChild(li);
});
