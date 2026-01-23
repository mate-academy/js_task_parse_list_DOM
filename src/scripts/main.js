'use strict';

// write code here
const list = document.querySelector('ul');

function sortList(listElement) {
  const arrayList = Array.from(listElement.children);

  arrayList.sort((a, b) => {
    return getSalary(b) - getSalary(a);
  });

  listElement.append(...arrayList);
}

function getSalary(li) {
  const value = li.dataset.salary.replaceAll('$', '').replaceAll(',', '');

  return Number(value);
}

function getEmployees(listElement) {
  return Array.from(listElement.children).map((li) => {
    const object = {
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: Number(li.dataset.salary),
      age: Number(li.dataset.age),
    };

    return object;
  });
}

sortList(list);
getEmployees(list);
