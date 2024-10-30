'use strict';

const employeesArray = Array.from(document.querySelectorAll('li'));
const parentList = document.querySelector('ul');

/**
 * Helper function for turning a salary string into a valid integer.
 */
function getSalaryInt(item) {
  const salaryString = item.dataset.salary.replace(/,/g, '').replace('$', '');

  return parseInt(salaryString) || 0;
}

/**
 * Function that sorts employees nodel by salary in descending order
 * and updates DOM.
 */
function sortList(list) {
  // Sort list items by salary in descending order
  const sortedArray = [...list].sort((a, b) => {
    const aSalary = getSalaryInt(a);
    const bSalary = getSalaryInt(b);

    return bSalary - aSalary;
  });

  // Update DOM
  const fragment = document.createDocumentFragment();

  sortedArray.forEach((item) => fragment.appendChild(item));

  parentList.innerHTML = '';
  parentList.appendChild(fragment);
}

sortList(employeesArray);

/**
 * Function that turns a node list into an array of objects.
 */
function getEmployees(list) {
  const objectsList = [];

  list.forEach((item) => {
    const itemObject = {
      fullName: item.innerText,
      position: item.dataset.position,
      age: item.dataset.age,
      salary: getSalaryInt(item),
    };

    objectsList.push(itemObject);
  });

  return objectsList;
}

getEmployees(employeesArray);
