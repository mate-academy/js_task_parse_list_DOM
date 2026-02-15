'use strict';

// write code here
const list = document.querySelectorAll('ul');

function parseSalary(salaryString) {
  return Number(salaryString.replace(/[$,]/g, ''));
}

function sortList(lists) {
  lists.forEach((ul) => {
    const items = Array.from(ul.querySelectorAll('li'));

    const sort = items.sort(
      (a, b) =>
        parseSalary(b.dataset.salary) -
        parseSalary(a.dataset.salary),
    );

    sort.forEach((li) => ul.appendChild(li));
  });
}

function getEmployees(lists) {
  const result = [];

  lists.forEach((ul) => {
    ul.querySelectorAll('li').forEach((li) => {
      result.push({
        name: li.textContent.trim(),
        position: li.dataset.position,
        salary: parseSalary(li.dataset.salary),
        age: Number(li.dataset.age),
      });
    });
  });

  return result;
}

sortList(list);

getEmployees(list);
