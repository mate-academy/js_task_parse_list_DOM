'use strict';

const employees = document.querySelectorAll('li');
const items = document.querySelector('ul');
const employeesData = [...employees];

function getEmployees(list) {
  list.reduce((acc, person) => {
    acc.push({
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    });

    return acc;
  }, []);
}

function stringToNumber(item) {
  return +item.replaceAll('$', '').replaceAll(',', '');
}

function sortList(list) {
  const result = list.sort((item1, item2) => {
    const salary1 = stringToNumber(item1.dataset.salary);
    const salary2 = stringToNumber(item2.dataset.salary);

    return salary2 - salary1;
  });

  items.innerHTML = '';

  return result.forEach((el) => items.appendChild(el));
}

getEmployees(employeesData);
sortList(employeesData);
