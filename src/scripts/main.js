'use strict';

const listOfEmployees = document.querySelectorAll('li');

function toInt(string) {
  const result = string.replace('$', '').split(',').join('');

  return Number.parseInt(result);
}

function sortList(listEmp) {
  const sortedList = [...listEmp].sort((a, b) => {
    const aSalary = toInt(a.dataset.salary);
    const bSalary = toInt(b.dataset.salary);

    return bSalary - aSalary;
  });

  const list = document.querySelector('ul');

  list.innerHTML = `
    ${sortedList.map((el, i) => `
        <li
            data-position="${el.dataset.position}"
            data-salary="${el.dataset.salary}"
            data-age="${el.dataset.age}"
        >
            ${el.innerText}
        </li>
    `).join('')}
  `;
}

function getEmployees(listEmp) {
  const arr = [];

  [...listEmp].forEach(el =>
    arr.push({
      name: el.innerText,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    })
  );

  return arr;
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
