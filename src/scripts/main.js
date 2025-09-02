'use strict';

// write code here

const regEx = /[$,]/g;

function sortList(list = document.querySelectorAll('li')) {
  const parsedEmployeeList = Array.from(list);

  const sortedEmployeeList = parsedEmployeeList.sort((a, b) => {
    return (
      Number(b.dataset.salary.replace(regEx, '')) -
      Number(a.dataset.salary.replace(regEx, ''))
    );
  });

  const parentLiElement = list[0].parentElement;

  parentLiElement.innerHTML = '';

  sortedEmployeeList.forEach((li) => parentLiElement.append(li));
}

function getEmployees(list = document.querySelectorAll('li')) {
  const parsedEmployeeList = Array.from(list);
  const dataList = [];

  parsedEmployeeList.forEach(
    (li) =>
      dataList.push({
        name: li.textContent.trim(),
        position: li.dataset.position,
        salary: Number(li.dataset.salary.replace(regEx, '')),
        age: Number(li.dataset.age),
      }),
    // eslint-disable-next-line function-paren-newline
  );

  return dataList;
}

sortList();
getEmployees();
