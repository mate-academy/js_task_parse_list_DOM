'use strict';

// const takenListItem = [...document.querySelectorAll('li')];
const takenList = document.querySelector('ul');

function sortList(list) {
  const items = [...document.querySelectorAll('li')];
  const sorted = items.map((li) => convert(li)).sort((li1, li2) => li2 - li1);
  const copy = [...items];

  sorted.forEach((element) => {
    const item = copy.find((li) => {
      const res = convert(li) === element;

      if (res) {
        copy.splice(copy.indexOf(li), 1);
      }

      return res;
    });

    list.append(item);
  });
}

function convert(value) {
  if (typeof value === 'object') {
    return +value.dataset.salary.replace(',', '').replace('$', '');
  }
}

function getEmployees(list) {
  const array = [];

  for (const li of list.children) {
    array.push({
      name: li.innerText,
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    });
  }

  return array;
}

sortList(takenList);
getEmployees(takenList);
