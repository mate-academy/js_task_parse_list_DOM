'use strict';

const ul = document.querySelector('ul');
const listInfo = ul.querySelectorAll('li');
// create a dataBase
const dataBase = [];

// add a data to dataBase
for (const li of listInfo) {
  dataBase.push(li);
}

// // create a convert function helper
// function convert(string) {
//   return parseFloat(string.replace(',', '.').slice(1));
// }

// upgrade 2.0
function convert(employe) {
  return parseFloat(employe.dataset.salary.replace(',', '.').slice(1));
}

// imlement a sort algorythm
function sortList(list) {
  return list.sort((a, b) => convert(b) - convert(a));
}

// change list to a sorted list
function getEmployees(list) {
  for (const li of list) {
    ul.appendChild(li);
  }
}

// final step :)
getEmployees(sortList(dataBase));
