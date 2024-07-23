'use strict';

const convertToNumber = (data) => {
  return +data.replace(',', '').slice(1);
};

const getEmployees = (list) => {
  const result = [];

  for (const item of list) {
    const salary = item.getAttribute('data-salary');
    const position = item.getAttribute('data-position');
    const age = item.getAttribute('data-age');
    const person = item.textContent.trim();

    result.push({
      person,
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

const sortList = () => {
  const list = document.querySelector('ul');
  const items = [...list.children];
  const employees = getEmployees(items);
  const sortedEmployees = employees.sort((a, b) => b.salary - a.salary);

  list.innerHTML = '';

  for (const employeer of sortedEmployees) {
    const li = ListItem(employeer.person);

    li.setAttribute('data-salary', `$${employeer.salary.toLocaleString()}`);
    li.setAttribute('data-position', employeer.position);
    li.setAttribute('data-age', employeer.age);

    list.append(li);
  }
};

sortList();
