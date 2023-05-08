'use strict';

const list = document.querySelectorAll('li');
const names = [...list].map(li => li.innerText);
const dataSet = [...list].map(li => li.dataset);

function toNumber(element) {
  return Number(element.slice(1).split(',').join(''));
}

const dataSetWithNames = dataSet.map((args, index) => {
  return {
    ...args,
    nameOfEmployee: names[index],
  };
});

function sortList() {
  dataSetWithNames.sort((a, b) => toNumber(b.salary) - toNumber(a.salary));
}

sortList();

function getEmployees() {
  list.forEach((el, index) => {
    const { position, salary, age, nameOfEmployee } = dataSetWithNames[index];

    el.dataset.position = position;
    el.dataset.salary = salary;
    el.dataset.age = age;
    el.innerText = nameOfEmployee;
  });
}

getEmployees();
