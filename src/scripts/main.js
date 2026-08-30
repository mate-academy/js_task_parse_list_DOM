'use strict';

const List = document.querySelector('ul');
const list = Array.from(document.querySelectorAll('li'));
const salariesMap = new Map();

list.forEach((item) => {
  const value = +item.getAttribute('data-salary').replace(/[$,]/g, '');

  salariesMap.set(item, value);
});

const sortedSalaries = Array.from(salariesMap.entries());

sortedSalaries.sort((a, b) => b[1] - a[1]);

for (let i = 0; i < sortedSalaries.length; i++) {
  List.appendChild(sortedSalaries[i][0]);
}
