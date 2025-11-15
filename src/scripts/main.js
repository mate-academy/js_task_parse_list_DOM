'use strict';

const list = document.querySelector('ul');

function sortList(ulList) {
  const itemsArray = Array.from(ulList.querySelectorAll('li'));

  itemsArray.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  itemsArray.forEach((item) => ulList.appendChild(item));
}

function getEmployees(ulList) {
  const itemsArray = Array.from(ulList.querySelectorAll('li'));

  return itemsArray.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: Number(item.dataset.salary.replace(/[$,]/g, '')),
      age: Number(item.dataset.age),
    };
  });
}

sortList(list);

getEmployees(list);
