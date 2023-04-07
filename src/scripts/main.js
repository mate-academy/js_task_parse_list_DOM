'use strict';

const list = document.querySelector('ul');
const people = document.querySelectorAll('li');

function sortList(arr) {
  function transNum(num) {
    return Number(num.replace('$', '').split(',').join(''));
  }

  return arr.map(item => {
    const dataInfo = item.dataset;
    const innerText = `${item.innerText}`;

    return {
      ...dataInfo,
      name : innerText
    }
  }).sort((a, b) => transNum(b.salary) - transNum(a.salary));
}
const sortValue = sortList([...people]);

list.innerHTML = '';

function getEmployees(obj) {
  obj.forEach(element => {
    const keysData = Object.keys(element);
    let itemList = document.createElement('li');
      
    for (let i = 0; i < keysData.length - 1; i++) {
      itemList.dataset[keysData[i]] = element[keysData[i]];
    }

    itemList.innerText = element.name;
    list.appendChild(itemList)
  });
}


getEmployees(sortValue);
