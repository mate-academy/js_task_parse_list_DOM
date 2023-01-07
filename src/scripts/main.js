'use strict';

const listData = [...document.querySelectorAll('li')];

function salaryToNum(list) {
  const salariesStr = list.map(el => el.getAttribute('data-salary'));
  const salariesNum = salariesStr.map(el => +el.split(',').join('').slice(1));

  for (let i = 0; i < list.length; i++) {
    list[i].setAttribute('data-salary', salariesNum[i]);
  }
};

function sortList(list) {
  salaryToNum(listData);

  let sort = [...list];

  sort = sort.sort((a, b) =>
    b.getAttribute('data-salary') - a.getAttribute('data-salary')
  );

  sort = sort.map(el => el.textContent.trim());

  for (let i = 0; i < sort.length; i++) {
    const newLi = document.createElement('li');

    newLi.innerText = sort[i];

    list[i].replaceWith(newLi);
  }
};

function getEmployees(list) {
  const array = [];

  for (const item of list) {
    let salaryData = +item.getAttribute('data-salary');

    salaryData = '$' + salaryData.toLocaleString();

    array.push({
      name: item.innerText.trim(),
      position: item.getAttribute('data-position'),
      salary: salaryData,
      age: item.getAttribute('data-age'),
    });
  }

  return array;
};

sortList(listData);
getEmployees(listData);
