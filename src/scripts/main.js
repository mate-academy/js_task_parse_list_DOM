'use strict';

let list = Array.from(document.getElementsByTagName('li'));

list = list.sort((a, b) => {
  const aSalary = parseInt(
    a.getAttribute('data-salary').replace(/[$,]/g, ''),
    10,
  );
  const bSalary = parseInt(
    b.getAttribute('data-salary').replace(/[$,]/g, ''),
    10,
  );

  return bSalary - aSalary;
});

document.querySelector('ul').innerHTML = '';

list.forEach((item) => {
  document.querySelector('ul').appendChild(item);
});
