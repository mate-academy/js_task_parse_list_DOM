'use strict';

const ul = document.querySelectorAll('li');

function sortList(list) {
  const copyOfList = [...list];

  const sortedCopy = copyOfList.sort(
    (user1, user2) =>
      extractNumber(user2.dataset.salary) - extractNumber(user1.dataset.salary),
  );

  for (let i = 0; i < sortedCopy.length; i++) {
    list[i].outerHTML = sortedCopy[i].outerHTML;
  }

  return list;
}

function extractNumber(str) {
  return +str.replace(/\D/g, '');
}

function getEmployees(list) {
  const employees = [];

  list.forEach((element) => {
    employees.push({
      name: element.textContent.trim(),
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    });
  });

  return employees;
}

sortList(ul);
getEmployees(ul);
