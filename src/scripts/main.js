'use strict';

const list = [...document.querySelectorAll('li')];

const helper = (arg) => {
  const str = arg.getAttribute('data-salary').replace(/[^0-9.]/g, '');

  return Number(str);
};

function sortList(arg) {
  return arg.sort((a, b) => {
    const aSalary = helper(a);
    const bSalary = helper(b);

    return bSalary - aSalary;
  });
}

function getEmployees(arg) {
  const result = [...arg];

  result.map((li) => {
    return {
      name: li.textContent,
      position: li.getAttribute('data-position'),
      salary: helper(li),
      age: Number(li.getAttribute('data-age')),
    };
  });

  return result;
}

const sorted = sortList(list);

const ul = document.querySelector(`ul`);

ul.innerHTML = '';

sorted.forEach((element) => {
  ul.appendChild(element);
});

getEmployees(sorted);
