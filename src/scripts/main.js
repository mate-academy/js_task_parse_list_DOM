'use strict';

const list = [...document.querySelectorAll('li')];

const toNumber = (arg) => {
  return arg.slice(1).replaceAll(',', '');
};

const sortList = (argList) => {
  const copyArray = [...argList];
  return copyArray.sort((e1, e2) => (
      toNumber(e2.dataset.salary) - toNumber(e1.dataset.salary)
    ));
};

const getEmployees = (argList) => {
  return argList.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
};



sortList(list);

getEmployees(list);
