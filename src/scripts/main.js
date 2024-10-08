'use strict';

// write code here
const ul = document.querySelector('ul');

function sortList(list) {
  const liArray = Array.from(list.querySelectorAll('li'));

  liArray.sort((a, b) => {
    const salaryA = parseFloat(
      a.getAttribute('data-salary').replace(/[^0-9.-]+/g, ''),
    );
    const salaryB = parseFloat(
      b.getAttribute('data-salary').replace(/[^0-9.-]+/g, ''),
    );

    return salaryB - salaryA;
  });
  list.innerHTML = '';
  liArray.forEach((li) => list.appendChild(li));
}

sortList(ul);

function getEmployees(list) {
  const emploArr = [];
  const liArray = Array.from(list.querySelectorAll('li'));

  for (const el of liArray) {
    emploArr.push({
      name: el.innerText,
      position: el.getAttribute('data-position'),
      salary: el.getAttribute('data-salary'),
      age: el.getAttribute('data-age'),
    });
  }

  return emploArr;
}

getEmployees(ul);
