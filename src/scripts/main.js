'use strict';

const ul = document.querySelector('ul');

const toNumber = (string) => {
  let result = '';

  result = string.replaceAll('$', '').replaceAll(',', '');

  return +result;
};

function sortList(list) {
  const arrayDatas = Array.from(list.children);

  arrayDatas.sort((firstLi, secondLi) => {
    const salaryFirst = toNumber(firstLi.getAttribute('data-salary'));
    const salarySecond = toNumber(secondLi.getAttribute('data-salary'));

    return salarySecond - salaryFirst;
  });

  list.append(...arrayDatas);
}

function getEmployees(list) {
  const childrens = Array.from(list.children);

  const result = [];

  for (const li of childrens) {
    const person = {};

    person.name = li.textContent.trim();
    person.position = li.getAttribute('data-position');
    person.salary = toNumber(li.getAttribute('data-salary'));
    person.age = +li.getAttribute('data-age');

    result.push(person);
  }

  return result;
}

sortList(ul);
getEmployees(ul);
