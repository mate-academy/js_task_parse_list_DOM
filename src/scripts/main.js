'use strict';

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);

function getEmployees(rawList) {
  return Array.from(rawList.children).map((li) => {
    const employee = {
      ...li.dataset,
      name: li.innerText,
    };

    return employee;
  });
}

function sortList(input) {
  const resultList = [...input.children];

  resultList.sort((a, b) => {
    const regex = /[,$]/g;
    const parseSalary = (element) => Number(
      element.dataset.salary.replace(regex, ''),
    );

    return parseSalary(a) - parseSalary(b);
  });

  input.append(...resultList);
}
