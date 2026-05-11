'use strict';

const getSalaryNumber = (salaryString = '0') => {
  return Number(salaryString.replaceAll(/\D/g, ''));
};

function sortList(listParam) {
  if (!listParam) {
    return;
  }

  const newList = listParam.sort((a, b) => {
    const salaryA = getSalaryNumber(a.dataset.salary);
    const salaryB = getSalaryNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  document.querySelector('ul').append(...newList);
}

function getEmployees(listParam) {
  if (!listParam) {
    return [];
  }

  return listParam.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: getSalaryNumber(item.dataset.salary),
    age: item.dataset.age,
  }));
}

const list = [...document.querySelectorAll('li')];

sortList(list);
getEmployees(list);
