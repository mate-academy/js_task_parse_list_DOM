'use strict';

const persons = document.querySelector('ul');

const salaryToNumber = (salary) => salary.replace(/[^0-9.]/g, '');

const sortList = (list) => {
  const childrenList = [...list.children];

  return childrenList.sort((a, b) => salaryToNumber(b.dataset.salary)
    - salaryToNumber(a.dataset.salary));
};
const sortedEmployees = sortList(persons);

persons.append(...sortedEmployees);

const getEmployees = (list) => {
  const arrChildrens = [...list.children];
  const personObjArr = [];

  for (let i = 0; i < arrChildrens.length; i++) {
    personObjArr.push(
      {
        name: arrChildrens[i].innerText,
        position: arrChildrens[i].dataset.position,
        salary: arrChildrens[i].dataset.salary,
        age: arrChildrens[i].dataset.age,
      }
    );
  }

  return personObjArr;
};

sortList(persons);
getEmployees(persons);
