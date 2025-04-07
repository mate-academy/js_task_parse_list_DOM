'use strict';

// write code here

// const list = document.querySelector('ul');

// const sortedList = Array.from(list.children).sort((item1, item2) => {
//   return (
//     Number(item2.dataset.salary.replaceAll('$', '').replaceAll(',', '')) -
//     Number(item1.dataset.salary.replaceAll('$', '').replaceAll(',', ''))
//   );
// });

// sortedList.forEach((item) => list.appendChild(item));

function sortList(employees) {
  return employees.sort((item1, item2) => {
    return (
      Number(item2.dataset.salary.replaceAll('$', '').replaceAll(',', '')) -
      Number(item1.dataset.salary.replaceAll('$', '').replaceAll(',', ''))
    );
  });
}

function getEmployees(sortedEmployees) {
  const list = document.querySelector('ul');

  sortedEmployees.forEach((employee) => {
    list.appendChild(employee);
  });
}

getEmployees(sortList([...document.querySelectorAll('li')]));
