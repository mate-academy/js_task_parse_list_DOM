'use strict';

const list = document.querySelector('ul');

function fixMoney(salary) {
  return Number(salary.replaceAll(',', '').replace('$', ''));
}

function sortList(listOfEmployees) {
  const listItems = [...listOfEmployees.children];

  const sortUl = listItems.sort((a, b) => {
    return fixMoney(b.dataset.salary) - fixMoney(a.dataset.salary);
  });

  list.append(...sortUl);
}

function getEmployees(listOfEmployees) {
  const listItems = [...listOfEmployees.children];

  const employees = listItems.map((el) => {
    const lastTabIndex = el.innerHTML.lastIndexOf('\n');
    const firstTabIndex = el.innerHTML.indexOf('\n');
    const nameOfEmployer = el.innerHTML
      .slice(firstTabIndex + 1, lastTabIndex)
      .trim();

    return {
      name: nameOfEmployer,
      position: el.dataset.position,
      salary: fixMoney(el.dataset.salary),
      age: Number(el.dataset.age),
    };
  });

  return employees;
}

sortList(list);
getEmployees(list);
