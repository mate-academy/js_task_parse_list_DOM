'use strict';

// write code here
const getList = document.querySelectorAll('li');
const arr = Array.from(getList);

function sortList(list) {
  const sorted = list.sort((a, b) => {
    const salaryA = parseFloat(
      a.getAttribute('data-salary').replace(/[^0-9.-]+/g, ''),
    );
    const salaryB = parseFloat(
      b.getAttribute('data-salary').replace(/[^0-9.-]+/g, ''),
    );

    return salaryB - salaryA;
  });
  const removeUl = document.querySelector('ul');

  removeUl.innerHTML = '';
  sorted.forEach((item) => removeUl.append(item));

  return sorted;
}

function getEmployees(list) {
  const result = list.map((elem) => {
    return {
      name: elem.innerText,
      position: elem.getAttribute('data-position'),
      salary: elem.getAttribute('data-salary'),
      age: elem.getAttribute('data-age'),
    };
  });

  return result;
}

sortList(arr);
getEmployees(arr);
