'use strict';

const list = document.querySelector('ul');
const listItems = [...list.children];

const convertToNumber = (data) => {
  return +data.replace(',', '').slice(1);
};

const getEmployees = (items) => {
  const result = [];

  for (const item of items) {
    const salary = item.getAttribute('data-salary');
    const position = item.getAttribute('data-position');
    const age = item.getAttribute('data-age');

    result.push({
      name: item.textContent.trim(),
      position,
      salary: convertToNumber(salary),
      age,
    });
  }

  return result;
};

const ListItem = (text) => {
  const li = document.createElement('li');

  li.textContent = text;

  return li;
};

const sortList = (employeesList) => {
  const sortedEmployees = employeesList.sort((a, b) => b.salary - a.salary);
  list.innerHTML = '';

  for (const employeer of sortedEmployees) {
    const li = ListItem(employeer.name);

    li.setAttribute('data-salary', `$${employeer.salary.toLocaleString()}`);
    li.setAttribute('data-position', employeer.position);
    li.setAttribute('data-age', employeer.age);

    list.append(li);
  }
};

const employees = getEmployees(listItems);

sortList(employees);
