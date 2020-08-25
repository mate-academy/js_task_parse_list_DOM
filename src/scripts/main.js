'use strict';

// write code here
const employees = [...document.querySelectorAll('li')];
const listResult = document.querySelector('ul');

const sortList = function(list) {
  list.sort((a, b) =>
    (+b.dataset.salary.split(',').join('').replace('$', ''))
    - (+a.dataset.salary.split(',').join('').replace('$', ''))
  );

  listResult.append(...list);
};

const getEmployees = function(list) {
  return list.map(element => (
    {
      name: element.innerHTML.trim(),
      ...element.dataset,
    }
  ));
};

sortList(employees);
getEmployees(employees);
