'use strict';

function getEmployees(listToUser) {
  const usersList = listToUser.map(el => {
    const salary = el.getAttribute('data-salary')
      .slice(1)
      .split(',')
      .join('');

    return {
      name: el.innerText,
      position: el.getAttribute('data-position'),
      salary: Number(salary),
      age: el.getAttribute('data-age'),
    };
  });

  return usersList;
}

function sortList(listToSort) {
  return listToSort.sort((a, b) => b.salary - a.salary);
}

const ul = document.querySelectorAll('ul')[0];
const list = document.querySelectorAll('li');
const user = getEmployees([...list]);
const sortedList = sortList(user);

ul.innerHTML = '';

sortedList.forEach(el => {
  const newLi = document.createElement('li');

  newLi.innerText = el.name;
  newLi.setAttribute('data-position', el.position);
  newLi.setAttribute('data-age', el.age);
  newLi.setAttribute('data-salary', `$${el.salary.toLocaleString()}`);
  ul.appendChild(newLi);
});
