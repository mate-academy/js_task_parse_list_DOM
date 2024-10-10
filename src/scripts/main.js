'use strict';

const ul = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

const sortList = function(items) {
  const list = Array.from(items);

  list.sort((a, b) => {
    const salaryA = parseInt(a.getAttribute('data-salary').replace(/[$,]/g, ''));
    const salaryB = parseInt(b.getAttribute('data-salary').replace(/[$,]/g, ''));

    return salaryB - salaryA;
  })

  ul.appendChild(...list);
};

const getEmployees = (list) => {
  return list.map((el) => {
    return {
      name: el.textContent.trim(),
      position: el.getAttribute('data-position'),
      salary: el.getAttribute('data-salary'),
      age: el.getAttribute('data-age'),
    };
  });
};

sortList(listItems);
getEmployees();
