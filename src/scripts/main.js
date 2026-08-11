'use strict';

// write code here
function parseList(listArr) {
  return listArr.map((item) => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

function sortBySalary(arr) {
  return arr.sort((a, b) => {
    return (
      b.salary.replace(/,/g, '').slice(1) - a.salary.replace(/,/g, '').slice(1)
    );
  });
}

const listBlock = document.querySelector('.js-list');
const list = parseList([...listBlock.querySelectorAll('li')]);
const sortedList = sortBySalary(list);

function creatNewListItem(data) {
  const elem = document.createElement('li');

  elem.innerText = data.name || '';
  elem.dataset.position = data.position || '';
  elem.dataset.salary = data.salary || '';
  elem.dataset.age = data.age || '';

  listBlock.appendChild(elem);
}

listBlock.innerHTML = '';

sortedList.forEach((empl) => {
  creatNewListItem(empl);
});
