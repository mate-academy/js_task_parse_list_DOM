'use strict';

function getEmployees(list) {
  const employees = [...list].map((listItem) => {
    listItem.dataset.name = listItem.innerHTML.trim();

    return listItem.dataset;
  });

  return employees;
}

function sortList(list) {
  const listToEdit = list;

  listToEdit.sort((a, b) => {
    const aSalary = sortList.getSalary(a);
    const bSalary = sortList.getSalary(b);

    return bSalary - aSalary;
  });
}

sortList.getSalary = function (obj) {
  const salary = +obj.salary.slice(1).split(',').join('.');

  return salary;
};

const pageMen = document.querySelectorAll('ul li');

const menData = getEmployees(pageMen);

sortList(menData);

menData.forEach((man, i) => {
  // eslint-disable-next-line no-shadow
  const { position, salary, age, name } = man;

  const whatAdd = document.createElement('li');

  whatAdd.setAttribute('position', position);
  whatAdd.setAttribute('salary', salary);
  whatAdd.setAttribute('age', age);
  whatAdd.appendChild(document.createTextNode(name));

  const toChange = document.querySelectorAll('ul li')[i];

  toChange.replaceWith(whatAdd);
});
