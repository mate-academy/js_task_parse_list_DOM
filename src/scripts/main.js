'use strict';

const array = [...document.querySelectorAll('li')];

const toNum = (el) => {
  return parseFloat(el.replace(/[$,]/g, ''));
};

const sortList = (list) => {
  list.sort((a1, a2) => toNum(a2.dataset.salary) - toNum(a1.dataset.salary));

  list.forEach((element) => {
    document.querySelector('ul').insertAdjacentElement('beforeend', element);
  });
};

const getEmployees = (list) => {
  const result = [];

  list.forEach((element) => {
    result[result.length] = {
      name: element.textContent,
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    };
  });

  return result;
};

sortList(array);
getEmployees(array);
