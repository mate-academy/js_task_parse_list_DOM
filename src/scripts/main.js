'use strict';

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort((item1, item2) => {
    const salaryA = convertString(item1.dataset.salary);
    const salaryB = convertString(item2.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  items.forEach((item) => list.append(item));
}

function getEmployees(list) {
  return [...list.querySelectorAll('li')].map((item) => {
    return {
      name: item.textContent.replaceAll('\n', '').trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

function convertString(string) {
  const normalizedString = string.replaceAll(/[,$]/g, '');

  return +normalizedString;
}

const unorderedList = document.querySelector('ul');

sortList(unorderedList);
getEmployees(unorderedList);
