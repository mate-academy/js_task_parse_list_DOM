'use strict';

const employeesList = document.body.children[1].children;

function sortList(list) {
  const sortedElementsOfList = [...list].sort((elementA, elementB) => {
    const { dataset: { salary: salaryAString } = {} } = elementA;
    const { dataset: { salary: salaryBString } = {} } = elementB;

    const salaryA = +salaryAString.replace(/\$|,/g, '');

    const salaryB = +salaryBString.replace(/\$|,/g, '');

    return salaryB - salaryA;
  });

  // return sortedElementsOfList.map(({ innerText }) => innerText);
  document.body.children[1].innerHTML = '';

  sortedElementsOfList.forEach((element) => {
    document.body.children[1].appendChild(element);
  });
}

function getEmployees(list) {
  return [...list].map(({ innerText, dataset }) => ({
    name: innerText, ...dataset,
  }));
}

sortList(employeesList);
getEmployees(employeesList);
