'use strict';

// write code here
const unorderedList = document.querySelector('ul');

const convertSalary = (salaryStr) => {
  let cleanStr = salaryStr.split('$')[1];

  cleanStr = cleanStr.split(',').join('');

  return parseFloat(cleanStr);
};

const sortList = (list) => {
  const listArray = Array.from(list.children);

  const sortedList = listArray.sort((a, b) => {
    const salaryA = convertSalary(a.getAttribute('data-salary'));
    const salaryB = convertSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  list.innerHTML = '';
  sortedList.forEach((item) => list.appendChild(item));
};

const getEmployees = (list) => {
  const listArray = Array.from(list.children);

  return listArray.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: convertSalary(item.getAttribute('data-salary')),
      age: parseInt(item.getAttribute('data-age')),
    };
  });
};

sortList(unorderedList);
getEmployees(unorderedList);
