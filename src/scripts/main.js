'use strict';

const list = document.querySelector('ul');
let arrList = [...list.children];

function sortList(arr) {
  return arr.sort((obj1, obj2) => {
    return (
      +obj2.dataset.salary.split('$')[1].split(',').join('')
      - +obj1.dataset.salary.split('$')[1].split(',').join('')
    );
  });
}

function getEmployees(arr) {
  const resArr = [];

  for (let i = 0; i < arr.length; i++) {
    resArr.push({
      name: arr[i].innerText.trim(),
      position: arr[i].dataset.position,
      salary: arr[i].dataset.salary,
      age: arr[i].dataset.age,
    });
  }

  return resArr;
}

getEmployees(arrList);

arrList = sortList(arrList);
list.innerHTML = '';
list.append(...arrList);
