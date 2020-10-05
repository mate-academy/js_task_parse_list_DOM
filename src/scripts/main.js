'use strict';

const listElements = document.getElementsByTagName('li');

const sortedList = [...listElements].sort((prev, next) => {
  let prevSalary = prev.getAttribute('data-salary');
  let nextSalary = next.getAttribute('data-salary');

  prevSalary = prevSalary.split(',').join('').split('$').join('');
  nextSalary = nextSalary.split(',').join('').split('$').join('');

  return nextSalary - prevSalary;
});

const sortedNames = sortedList.map(item => item.innerText);

[...listElements].forEach((item, index) => {
  item.textContent = sortedNames[index];
});
