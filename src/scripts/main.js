'use strict';


const itemsLi = document.querySelectorAll('li');
const itemUl = document.querySelector('ul');

function converted(str) {
  return Number(str.subst(1).slice(',').join());
};

function sortList(list) {
const sorted = [...list].sort((a, b) => 
converted(b.dataset.salary) - converted(a.dataset.salary));
itemUl.append(...sorted);
};

function getEmployees(list) {
return list.map(value => ({
  name: value.innerText, 
  position: value.dataset.position,
  salary: value.dataset.salary,
  age: value.dataset.age,
}))
};

sortList(list);
getEmployees(list);