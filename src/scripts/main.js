'use strict';

const list = document.querySelectorAll('li');

function sortList() {
  const arrPeople = [...list].map(el => {
    return {
      'name': el.innerText,
      'position': el.dataset.position,
      'salary': el.dataset.salary,
      'salaryNum': +el.dataset.salary.replace(/[$,]/g, ''),
      'age': el.dataset.age,
    };
  });

  arrPeople.sort((a, b) => b.salaryNum - a.salaryNum);

  const ulInsert = document.querySelector('ul');

  ulInsert.innerHTML = arrPeople.map(el => {
    return (
      `<li
        data-position="${el['position']}"
        data-salary="${el['salary']}"
        data-age="${el['age']}"
      >
        ${el['name']}
      </li>`);
  }).join('');
}

sortList(list);

function getEmployees() {
  return [...list].map(el => {
    return {
      'name': el.innerText,
      'position': el.dataset.position,
      'salary': el.dataset.salary,
      'age': el.dataset.age,
    };
  });
}

getEmployees(list);
