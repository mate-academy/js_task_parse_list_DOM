'use strict';


const list = document.querySelector('ul');
const people = document.querySelectorAll('li');


function sortList(arr) {
  function transNum(num) {
    return Number(num.split('$').join('').split(',').join(''));
  }

  return arr.map(item => {
    const dataInfo = item.dataset;
    const innerText = `${item.innerText}`;

    return {name : innerText, ...dataInfo}
  }).sort((a, b) => transNum(b.salary) - transNum(a.salary));
}
const qwe = sortList([...people]);
list.innerHTML = ''
function getEmployees(obj) {
  

  for (let i = 0; i < obj.length; i++) {
    const keysData = Object.keys(obj[i]);
    let itemList = document.createElement('li');
      
    for (let j = 1; j < keysData.length; j++) {
      itemList.dataset[keysData[j]] = obj[i][keysData[j]];
    }

    itemList.innerText = obj[i].name;
    list.appendChild(itemList)
  }
}

getEmployees(qwe);
