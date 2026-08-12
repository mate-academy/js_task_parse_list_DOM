'use strict';

// write code here
function getEmployees(listArr) {
  return [...listArr].map((item) => {
    return {
      name: item.innerHTML,
      position: item.dataset.position,
      salary: convertToNumber(item.dataset.salary),
      age: +item.dataset.age,
    };
  });
}

const list = getEmployees(
  document.querySelector('.js-list').querySelectorAll('li'),
);

function createNewListItem(data) {
  const elem = document.createElement('li');

  elem.innerText = data.name || '';
  elem.dataset.position = data.position || '';
  elem.dataset.salary = '$' + data.salary || '';
  elem.dataset.age = data.age || '';

  return elem;
}

function convertToNumber(string) {
  return string.replace(/,/g, '').slice(1);
}

function sortList(listBlock) {
  const sortedList = list.sort((a, b) => {
    return convertToNumber(b.salary) - convertToNumber(a.salary);
  });

  listBlock.innerHTML = '';

  sortedList.forEach((empl) => {
    listBlock.append(createNewListItem(empl));
  });
}

sortList(document.querySelector('.js-list'));
