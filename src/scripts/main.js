'use strict';

const list = document.querySelector('ul');

function sort(startList) {
  const sel = (person) => {
    return person.dataset.salary.slice(1).split(',').join('');
  };

  const sortedList = [...startList.children].sort(
    (a, b) => sel(b) - sel(a)
  );

  list.append(...sortedList);
}

function employees(employeedList) {
  const employeesValue = [];

  for (const { innerText, dataset } of employeedList.children) {
    employeesValue.push({
      name: innerText,
      age: dataset.age,
      position: dataset.position,
      salary: dataset.salary,
    });
  }

  return employeesValue;
};

sort(list);
employees(list);
