'use strict';

const listOfEmployee = [...document.querySelectorAll('li')];
const parentElement = document.querySelector('ul');

const sortList = (elements) => {
  return elements.sort((a, b) => {
    const salaryA = Number(
      a.getAttribute('data-salary').replace(/(\$|,)/g, ''),
    );
    const salaryB = Number(
      b.getAttribute('data-salary').replace(/(\$|,)/g, ''),
    );

    return salaryB - salaryA;
  });
};

const sortedElements = sortList(listOfEmployee);

parentElement.innerHTML = '';

sortedElements.forEach((element) => {
  parentElement.appendChild(element);
});

const getEmployees = (list) => {
  return list.map((element) => {
    const attributes = [...element.attributes];

    const user = {};

    for (const attr of attributes) {
      user[attr.name.slice(5)] = attr.value;
    }

    user.name = element.innerText;

    return user;
  });
};

window.console.log(getEmployees(listOfEmployee));
