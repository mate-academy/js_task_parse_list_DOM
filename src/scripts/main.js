'use strict';

const stringToNumber = (salaryString) => {
  return Number(salaryString.replace(/[$,]/g, ''));
};

const sortList = (list) => {
  const sortedList = list.sort(
    (item1, item2) =>
      stringToNumber(item2.dataset.salary) -
      stringToNumber(item1.dataset.salary),
  );

  const listContainer = document.querySelector('ul');

  sortedList.forEach((item) => listContainer.append(item));
};

const getEmployees = (list) => {
  return list.map((item) => ({
    name: item.textContent,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
};

const listOfLi = [...document.querySelectorAll('li')];

sortList(listOfLi);
getEmployees(listOfLi);
