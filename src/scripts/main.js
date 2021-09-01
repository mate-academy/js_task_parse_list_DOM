'use strict';

// write code here

const list = document.querySelectorAll('li');

function sortList(lists) {
  return [...lists].sort((a, b) => {
    const textA = a.dataset.salary.split('$').join('').split(',').join('');
    const textB = b.dataset.salary.split('$').join('').split(',').join('');

    return textB - textA;
  }).forEach(el => el.parentNode.append(el));
}

function getEmployees(lists) {
  const mass = [];

  for (let i = 0; i < lists.length; i++) {
    const objOrder = {
      'name': lists[i].textContent.trim(),
      'position': lists[i].dataset.position,
      'salary': lists[i].dataset.salary,
      'age': lists[i].dataset.age,
    };

    mass.push(objOrder);

  }

  return mass;
}

// console.log(getEmployees(list));

sortList(list);
getEmployees(list);
