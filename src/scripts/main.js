'use strict';

const liTags = document.querySelectorAll('li');
const itemsArray = [...liTags];

const fromStringToNumber = (salaryString) => {
  return +salaryString.replace(/[$,]/g, '');
};

const sortList = (listElement) => {
  listElement.sort((a, b) => {
    const salaryA = fromStringToNumber(a.dataset.salary);
    const salaryB = fromStringToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  const ulTag = document.querySelector('ul');

  ulTag.innerHTML = '';

  listElement.forEach((item) => {
    ulTag.appendChild(item);
  });
};

const getEmployees = (listElement) => {
  const employees = listElement.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: +item.dataset.age,
  }));

  return employees;
};

sortList(itemsArray);
getEmployees(itemsArray);
