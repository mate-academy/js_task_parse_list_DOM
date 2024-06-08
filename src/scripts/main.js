'use strict';

const ulList = document.querySelector('ul');
const listLi = Array.from(document.querySelectorAll('li'));

const sortList = (list) => {
  return list.sort((el1, el2) => {
    const firElem = el1.dataset.salary;
    const secElem = el2.dataset.salary;

    const cleanedString1 = firElem.replace(/,/g, '').replace(/\$/g, '');
    const cleanedString2 = secElem.replace(/,/g, '').replace(/\$/g, '');

    return parseInt(cleanedString2) - parseInt(cleanedString1);
  });
};

const getEmployees = (list) => {
  const listPersons = [];

  list.forEach((element) => {
    listPersons.push({
      name: element.innerText,
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    });
  });

  return listPersons;
};

getEmployees(listLi);
sortList(listLi);

ulList.innerHTML = '';
listLi.forEach((element) => ulList.appendChild(element));
