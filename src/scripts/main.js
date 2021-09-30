'use strict';

const list = document.getElementsByTagName('li');

const listArr = sortList(list);

getEmployees(listArr, list);

function sortList(listPeople) {
  const result = [];

  for (const person of listPeople) {
    result.push(objCreate(person));
  }

  return result.sort((x, y) => y.salary - x.salary);
}

function objCreate(person) {
  const obj = {};

  obj.name = person.innerText;
  obj.position = person.dataset.position;
  obj.salary = +person.dataset.salary.substring(1).split(',').join('');
  obj.age = person.dataset.age;

  return obj;
};

function getEmployees(listPeople, listElement) {
  for (let i = 0; i < listPeople.length; i++) {
    listElement[i].textContent = listPeople[i].name;
    listElement[i].dataset.position = listPeople[i].position;
    listElement[i].dataset.salary = '$' + bitRate(listPeople[i].salary);
    listElement[i].dataset.age = listPeople[i].age;
  }
};

function bitRate(sum) {
  const arr = [];

  for (let j = sum.toString().length; j > 0; j = j - 3) {
    let step = 3;

    if (j < 3) {
      step = j;
    };

    arr.unshift(sum.toString().substr(j - step, step));
  };

  return arr.join(',');
}
