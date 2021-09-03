'use strict';

// write code here

const list = document.querySelectorAll('li');

function sortList(elements) {
  return [...elements].sort((a, b) => {
    const textA = a.dataset.salary.split('$').join('').split(',').join('');
    const textB = b.dataset.salary.split('$').join('').split(',').join('');

    return textB - textA;
  }).forEach(el => el.parentNode.append(el));
}

function getEmployees(elements) {
  const result = [];

  for (let i = 0; i < elements.length; i++) {
    const objOrder = {
      'name': elements[i].textContent.trim(),
      'position': elements[i].dataset.position,
      'salary': elements[i].dataset.salary,
      'age': elements[i].dataset.age,
    };

    result.push(objOrder);

  }

  return result;
}

sortList(list);
getEmployees(list);
