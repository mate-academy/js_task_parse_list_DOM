'use strict';

const listElement = document.querySelector('ul');

function sortList(list) {
  const listItems = [...list.children];

  listItems.sort((item1, item2) => {
    const convertedItem1 = convertSalary(item1.dataset.salary);
    const convertedItem2 = convertSalary(item2.dataset.salary);

    return convertedItem2 - convertedItem1;
  });

  list.innerHTML = '';

  listItems.forEach((item) => list.append(item));

  return list;
}

function convertSalary(salary) {
  return +salary.replace('$', '').replaceAll(',', '');
}

function getEmployees(list) {
  const listItems = [...list.children];

  return listItems.map((item) => {
    const { position, salary, age } = item.dataset;

    return {
      name: item.textContent.trim(),
      position,
      salary: convertSalary(salary),
      age,
    };
  });
}

sortList(listElement);
getEmployees(listElement);
