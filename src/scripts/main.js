'use strict';

const employeesList = document.querySelectorAll('li');

const targetElem = document.querySelector('ul');

const parseToInt = (number) => {
  return parseInt(number.split('$').join(''));
};

const sortList = (list, target, tagName) => {
  const copiedList = [...list];

  const targetItems = target.querySelectorAll(tagName);

  if (targetItems.length) {
    targetItems.forEach((targetItem) => {
      targetItem.remove();
    });
  }

  const sortedArray = copiedList.sort(
    (a, b) => parseToInt(b.dataset.salary) - parseToInt(a.dataset.salary),
  );

  sortedArray.forEach((item) => {
    const liElement = document.createElement(tagName);

    liElement.textContent = item.textContent;
    liElement.setAttribute('data-position', item.dataset.position);
    liElement.setAttribute('data-salary', item.dataset.salary);
    liElement.setAttribute('data-age', item.dataset.age);

    target.appendChild(liElement);
  });
};

const getEmployees = (list) => {
  const arr = [];

  list.forEach((item) => {
    const obj = {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    arr.push(obj);
  });

  return arr;
};

sortList(employeesList, targetElem, 'li');

getEmployees(employeesList);
