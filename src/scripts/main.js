'use strict';

// write code here

function convertNumber(number) {
  let final = number;

  let final2 = final.slice(1).split(',').join('')

  return +final2;
}

let list = document.querySelectorAll('li')

function getEmployees(list) {
  let copy4 = [];

  for (let i = 0; i < list.length; i++) {

    let copy3 = {}
    copy3.person = list[i].innerText;
    copy3.salary = convertNumber(list[i].dataset.salary);
    copy4.push(copy3)
  }

  return copy4;
}

function sortList(list) {

  let listDom = document.querySelectorAll('li')

  for (let i = 0; i < list.length; i++) {
    list.sort((a, b) => b.salary - a.salary)
    listDom[i].innerText = list[i].person;
  }
}


sortList(getEmployees(list));




