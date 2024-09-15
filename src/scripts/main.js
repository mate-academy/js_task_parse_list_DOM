'use strict';

const employeesElement = document.querySelector('.employess');
const employees = [...employeesElement.children];

const convertToNumber = (list) => {
  list.forEach(item => {
    const num = Number(item.getAttribute('data-salary').replace(/[$,]/g, ''));

    item.setAttribute('data-salary', num);
  });
};

const sortList = (list) => {
  convertToNumber(list);

  list.sort((a, b) =>
    b.getAttribute('data-salary')
    - a.getAttribute('data-salary')
  );
};

const getEmployess = (list) => {
  employeesElement.innerHTML = '';

  return list.map(employee => {
    const liElement = document.createElement('li');

    liElement.setAttribute(
      'data-position',
      employee.getAttribute('data-position')
    );

    liElement.setAttribute(
      'data-salary',
      employee.getAttribute('data-salary')
    );

    liElement.setAttribute(
      'data-age',
      employee.getAttribute('data-age')
    );

    liElement.innerText = employee.innerText.trim();
    employeesElement.appendChild(liElement);

    return liElement;
  });
};

sortList(employees);
getEmployess(employees);
