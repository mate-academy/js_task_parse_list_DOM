'use strict';

const element = document.body.children[1];
const list = element.children;

const sortList = function(value) {
  return [...list].sort((a, b) =>
    Number(b.getAttribute('data-salary').slice(1).split(',').join(''))
      - Number(a.getAttribute('data-salary').slice(1).split(',').join('')));
};

element.append(...sortList(list));

const getEmployees = function(value) {
  const arrayList = [...list];

  return arrayList.map(x =>
    (
      {
        name: x.innerText,
        position: x.getAttribute('data-position'),
        salary: x.getAttribute('data-salary'),
        age: x.getAttribute('data-age'),
      }
    )
  );
};

getEmployees(list);
