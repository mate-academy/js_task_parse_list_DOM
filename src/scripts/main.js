'use strict';

const fullList = document.querySelector('ul');
const elementOfFullList = document.querySelectorAll('li');

const gettingEmployees
 = (list) => [...list].map((item) => ({
   name: item.textContent,
   postion: item.getAttribute('data-position'),
   salary: item.getAttribute('data-salary'),
   age: item.getAttribute('data-age'),
 }));

const gettingSalaries = (salary) => {
  return +salary.getAttribute('data-salary').replace(/[$,]/g, '');
};

const sortingEmployees = (list) => {
  const sortedList = [...list].sort((x, y) => {
    return gettingSalaries(y) - gettingSalaries(x);
  });

  sortedList.forEach((item) => {
    fullList.append(item);
  });
};

while (fullList.firstChild) {
  fullList.removeChild(fullList.firstChild);
};

gettingEmployees(elementOfFullList);
sortingEmployees(elementOfFullList);

// 'use strict';

// const getEmployees = (list) => [...list].map(item => ({
//   name: item.textContent.trim(),
//   position: item.getAttribute('data-position'),
//   salary: item.getAttribute('data-salary'),
//   age: item.getAttribute('data-age'),
// }));

// const getSalary = (item) => {
//   return +item.getAttribute('data-salary').replace(/[$,]/g, '');
// };

// const sortList = (list) => [...list].sort(
//   (x, y) => getSalary(y) - getSalary(x));

// const sortedListItems = sortList(document.querySelectorAll('li'));
// const ulElement = document.querySelector('ul');

// while (ulElement.firstChild) {
//   ulElement.removeChild(ulElement.firstChild);
// }

// sortedListItems.forEach((item) => {
//   ulElement.append(item);
// });

// getEmployees(document.querySelectorAll('li'));
