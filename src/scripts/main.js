'use strict';

const listElement = document.querySelector('ul');

const sortList = function (list) {
  const liElements = [...list.children];

  liElements.sort(
    (a, b) =>
      +b.dataset.salary.replaceAll(',', '').replace('$', '') -
      +a.dataset.salary.replaceAll(',', '').replace('$', ''),
  );

  liElements.forEach((li) => {
    list.append(li);
  });
};

sortList(listElement);

function getEmployees(list) {
  const employees = [...list.children];

  return employees.map((employee) => {
    return Object.assign({ name: employee.innerText }, employee.dataset);
  });
}

getEmployees(listElement);
