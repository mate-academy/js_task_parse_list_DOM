'use strict';

function sortList(list) {
  const elementUl = document.querySelector(list);
  const elementsLi = [...elementUl.querySelectorAll('li')];

  elementsLi.sort(
    (a, b) => convertor(b.dataset.salary) - convertor(a.dataset.salary),
  );

  elementsLi.forEach((elem) => elementUl.append(elem));
}

function convertor(num) {
  return +num.replace(/\D/g, '');
}

function getEmployees(list) {
  const elementUl = document.querySelector(list);
  const elementsLi = [...elementUl.querySelectorAll('li')];

  return elementsLi.map((elem) => ({
    name: elem.textContent.trim(),
    position: elem.dataset.position,
    salary: elem.dataset.salary,
    age: elem.dataset.age,
  }));
}

sortList('ul');
getEmployees('ul');
