'use strict';

const lists = document.querySelectorAll('ul');

const salaryToNumber = (salaryString) =>
  +salaryString.slice(1).split(',').join('');

const sortList = (list) => {
  const listItems = Array.from(list.children);

  listItems.sort((a, b) => {
    const salaryA = salaryToNumber(a.dataset.salary);
    const salaryB = salaryToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  listItems.forEach((item) => list.appendChild(item));
};

const getEmployees = (list) => {
  const listItems = Array.from(list.children);

  const employees = listItems.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));

  return employees;
};

lists.forEach((list) => {
  sortList(list);

  const employees = getEmployees(list);

  return employees;
});
