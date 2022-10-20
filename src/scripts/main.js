'use strict';

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

function sortList(listProperties) {
  return [...listProperties].sort((salary1, salary2) =>
    Number(replaceSigns(salary2.dataset.salary))
    - Number(replaceSigns(salary1.dataset.salary))
  );
};

function replaceSigns(string) {
  return string.replace(',', '').replace('$', '');
};

const sortedList = sortList(listItems);

list.innerHTML
= sortedList.map(employee => `
  <li
  data-position = ${employee.dataset.position}
  data-salary = ${employee.dataset.salary}
  data-age = ${employee.dataset.age}
  >
  ${employee.innerText}
  </li>`).join('');

function getEmployees(listProperties) {
  return [...listProperties].map(employee => {
    return {
      ...employee,
      name: employee.innerText.replace('\n', '').trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
};

getEmployees(sortedList);
