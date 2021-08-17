'use strict';

// write code here
const personsHTMLCollection = document.querySelectorAll('li');

function formatNumbers(num) {
  return Number(num.slice(1, num.indexOf(',')) + num.slice(-3));
}

const dataArray = Array.prototype.slice.call(personsHTMLCollection);

dataArray.sort(function(a, b) {
  return formatNumbers(b.dataset.salary) - formatNumbers(a.dataset.salary);
});

function getEmployees(list) {
  const data = document.querySelector('ul');
  const listLength = list.length;

  data.innerHTML = '';

  for (let i = 0; i < listLength; i++) {
    document.querySelectorAll('ul')[0].innerHTML += list[i].outerHTML;
  }
}

getEmployees(dataArray);
