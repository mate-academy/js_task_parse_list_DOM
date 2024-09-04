'use strict';

const list = document.querySelector('li');
const listItems = Array.from(list.children);
const salaries = [];

function parseSalary(salary) {
  return +salary.replace(/[$,]/g, '');
}

function sortList() {
  listItems.forEach((item) => {
    const salary = parseSalary(item.dataset.salary);

    salaries.push({ item, salary });
  });

  salaries.sort((a, b) => b.salary - a.salary);

  list.innerHTML = '';
  salaries.forEach(({ item }) => list.append(item));

  listItems.length = 0;
  listItems.push(...Array.from(list.children));
}

sortList();

function getEmployees() {
  return listItems.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

getEmployees();
