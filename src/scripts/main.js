'use strict';

const listBlock = document.querySelector('.js-list');
const list = getEmployees(listBlock.querySelectorAll('li'));

// write code here
function getEmployees(listArr) {
  return [...listArr].map((item) => {
    return {
      user: item.innerHTML,
      name: item.dataset.position,
      salary: convertToNumber(item.dataset.salary),
      age: +item.dataset.age,
    };
  });
}

function createNewListItem(data) {
  const elem = document.createElement('li');

  elem.innerText = data.name || '';
  elem.dataset.position = data.position || '';
  elem.dataset.salary = '$' + data.salary || '';
  elem.dataset.age = data.age || '';

  listBlock.appendChild(elem);
}

function convertToNumber(string) {
  return string.replace(/,/g, '').slice(1);
}

function sortList(List) {
  const sortedList = list.sort((a, b) => {
    return convertToNumber(b.salary) - convertToNumber(a.salary);
  });

  listBlock.innerHTML = '';

  sortedList.forEach((empl) => {
    createNewListItem(empl);
  });
}



sortList(listBlock.querySelectorAll('li'));
