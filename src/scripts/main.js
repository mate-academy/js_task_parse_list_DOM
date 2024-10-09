'use strict';

const listItems = document.querySelectorAll('li');

const sortList = () => {
  const arr = Array.from(listItems);

  return arr.sort((a, b) => {
    const salaryA = parseInt(
      a.getAttribute('data-salary').replace(/[$,]/g, ''),
    );
    const salaryB = parseInt(
      b.getAttribute('data-salary').replace(/[$,]/g, ''),
    );

    return salaryB - salaryA;
  });
};

const getEmployees = (sortedArr) => {
  const arr = [];

  const listArray = sortedArr.map((el) => {
    return {
      name: el.textContent.trim(),
      position: el.getAttribute('data-position'),
      salary: el.getAttribute('data-salary'),
      age: el.getAttribute('data-age'),
    };
  });

  for (const ch of listArray) {
    arr.push(ch.name);
  }

  return arr;
};

sortList();
getEmployees();
