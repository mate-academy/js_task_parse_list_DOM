'use strict';

const list = document.querySelector('ul').children;

const arraySort = [];

function sortList(array, listChildren) {
  return getEmployees(array, listChildren)
    .sort((a, b) =>
      conversion(b.salary) - conversion(a.salary));
}

function conversion(salary) {
  return +salary.replace('$', '').replaceAll(',', '');
}

function getEmployees(array, listChildren) {
  for (const item of listChildren) {
    const person = {
      name: item.innerHTML.trim(), ...item.dataset,
    };

    array.push(person);
  }

  return array;
}

sortList(arraySort, list);

document.querySelector('ul').innerHTML = '';

arraySort.forEach(el => {
  document.querySelector('ul')
    .insertAdjacentHTML('beforeend',
      `<li 
        data-position=${el.position} 
        data-salary=${el.salary} 
        data-age=${el.age}
      >
      ${el.name}
      </li>`);
});
