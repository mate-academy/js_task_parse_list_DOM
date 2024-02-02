'use strict';

const fullList = document.querySelector('ul');
const elementOfFullList = document.querySelectorAll('li');

const sortEmployeesBySalary = (list) => {
  const sortedList = [...list].sort((x, y) => {
    return getSalary(y) - getSalary(x);
  });

  sortedList.forEach((item) => fullList.appendChild(item));
};

const getSalary = (item) => {
  return +item.getAttribute('data-salary').replace(/[$,]/g, '');
};

const clearList = () => {
  while (fullList.firstChild) {
    fullList.removeChild(fullList.firstChild);
  }
};

// Main execution
clearList();
sortEmployeesBySalary(elementOfFullList);
