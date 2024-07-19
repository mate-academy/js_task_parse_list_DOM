'use strict';

const employees = document.querySelector('ul');
const arrayOfEmployees = [...employees.children];

function stringToDigit(str) {
  const digit = +str.replace(/\D/g, '');

  // console.log(digit);
  return digit;
}

// console.log(arrayOfEmployees[0].dataset.salary);
// console.log(stringToDigit('$162,700'));
// console.log(typeof x, x);
// console.log(typeof NaN);
