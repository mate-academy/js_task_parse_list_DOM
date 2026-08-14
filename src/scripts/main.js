'use strict';

function toNumber(item) {
  return +item.replaceAll('$', '').replaceAll(',', '');
}

function sortList(list) {
  const masOfList = [...list.children];

  masOfList.sort(
    (a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary),
  );

  masOfList.forEach((li) => list.append(li));
}

function getEmployees(list) {
  const masOfElementLi = [...list.children];
  const masObjectsElement = masOfElementLi.map((element) => {
    return {
      name: element.textContent.trim(),
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: +element.dataset.age,
    };
  });

  return masObjectsElement;
}

const employeesList = document.querySelector('ul');

sortList(employeesList);
getEmployees(employeesList);
