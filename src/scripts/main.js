'use strict';

function sortList(listProperty) {
  const sortedList = [...listProperty.children].sort((a, b) => {
    return getAmountFromAttribute(b.dataset.salary)
      - getAmountFromAttribute(a.dataset.salary);
  });

  sortedList.forEach(item => listProperty.append(item));
}

function getEmployees(listProperty) {
  return [...listProperty.children].map(item => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: getAmountFromAttribute(item.dataset.salary),
      age: item.dataset.age,
    };
  });
}

function getAmountFromAttribute(value) {
  return value.slice(1).replaceAll(',', '');
}

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);
