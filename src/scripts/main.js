'use strict';

const salaryToNum = (text) => {
  return +text.slice(1, text.length).split(',').join('');
};

const sortList = (list) => {
  const liItems = document.querySelectorAll(`${list} li`);

  let sortedArr = [];

  liItems.forEach(li => sortedArr.push(li));

  sortedArr = sortedArr.sort((a, b) => {
    return salaryToNum(b.dataset.salary) - salaryToNum(a.dataset.salary);
  });

  const listElement = document.querySelector(`${list}`);

  listElement.innerHTML = '';

  sortedArr.forEach(li => {
    listElement.insertAdjacentHTML('beforeend', `
      <li
        data-position="${li.dataset.position}"
        data-salary="${li.dataset.salary}"
        data-age="${li.dataset.age}"
      >
        ${li.textContent}
      </li>
    `);
  });
};

sortList('ul');

const getEmployees = (list) => {
  const liItem = document.querySelectorAll(`${list} li`);

  const result = [];

  liItem.forEach(li => {
    const obj = {};

    obj.name = li.textContent.trim();
    obj.position = li.dataset.position;
    obj.salary = li.dataset.salary;
    obj.age = li.dataset.age;

    result.push(obj);
  });
};

getEmployees('ul');
