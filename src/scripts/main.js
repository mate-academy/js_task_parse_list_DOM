'use strict';

const list = Array.from(document.querySelectorAll('li'));
const listData = list.map((li) => ({
  name: li.textContent.trim(),
  data: { ...li.dataset },
}));

function toNumbers(array) {
  return array.map((person) => ({
    ...person,
    ...(person.data.salary = parseInt(person.data.salary.replace(/[$,]/g, ''))),
  }));
}

function sortList(listToSort) {
  const listWithNumbers = toNumbers(listToSort);
  const sortedList = listWithNumbers.sort(
    (worker1, worker2) => worker2.data.salary - worker1.data.salary,
  );
  const updatedList = document.querySelector('ul');

  updatedList.innerHTML = '';

  sortedList.forEach((employee) => {
    const li = document.createElement('li');

    li.dataset.position = employee.data.position;
    li.dataset.salary = `$${employee.data.salary.toLocaleString()}`;
    li.dataset.age = employee.data.age;
    li.textContent = employee.name;
    updatedList.appendChild(li);
  });
}

function getEmployees(listNew) {
  return listNew.map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

getEmployees(list);
sortList(listData);
