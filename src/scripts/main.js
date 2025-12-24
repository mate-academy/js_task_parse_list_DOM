'use strict';

const ul = document.querySelector('ul');
const employees = getEmployees(document.querySelectorAll('li'));

sortList(Array.from(employees));

function sortList(arr) {
  const result = arr.sort((item1, item2) => {
    const a = parseSalary(item1.salary);
    const b = parseSalary(item2.salary);

    return b - a;
  });

  for (const item of result) {
    ul.insertAdjacentElement('beforeend', item.element);
  }
}

function getEmployees(list) {
  const result = [];

  for (const item of list) {
    const temp = {
      element: item,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    result.push(temp);
  }

  return result;
}

function parseSalary(number) {
  let result = '';
  const arr = Array.from(number);
  const map = '1234567890';

  for (let i = 0; i < arr.length; i++) {
    if (map.includes(arr[i])) {
      result += arr[i];
    }
  }

  return Number.parseInt(result);
}
