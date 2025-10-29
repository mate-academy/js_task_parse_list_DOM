'use strict';

const parentListElem = document.querySelector('ul');

function sortList(list) {
  if (!list) {
    return;
  }

  const listItemsArray = Array.from(list.querySelectorAll('li'));

  listItemsArray.sort((a, b) => {
    const getSalary = (item) => {
      const cleanSalary = item.dataset.salary.replace(/[^0-9.]/g, '') || 0;

      return parseFloat(cleanSalary) || 0;
    };

    return getSalary(b) - getSalary(a);
  });

  list.append(...listItemsArray);
}

function getEmployees(list) {
  if (!list) {
    return [];
  }

  const employeesArr = Array.from(list.querySelectorAll('li')).map((item) => {
    const employeesName = item.textContent.trim();
    const salary = parseFloat(item.dataset.salary.replace(/[^0-9.]/g, ''));
    const age = parseInt(item.dataset.age);

    return {
      name: employeesName,
      position: item.dataset.position,
      salary: salary,
      age: age,
    };
  });

  return employeesArr;
}

sortList(parentListElem);
getEmployees(parentListElem);
