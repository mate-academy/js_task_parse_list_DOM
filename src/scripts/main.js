'use strict';

const employeesList = document.querySelectorAll('li');

function sortList(unsortedList) {
  const arrayList = getEmployees(unsortedList);

  arrayList.sort((a, b) => {
    const salaryA = salaryToNumber(a.dataset.salary);
    const salaryB = salaryToNumber(b.dataset.salary);

    if (salaryA < salaryB) {
      return 1;
    }

    if (salaryA > salaryB) {
      return -1;
    }

    return 0;
  });

  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  for (const element of arrayList) {
    const li = document.createElement('li');

    li.innerHTML = element.innerText;
    li.setAttribute('data-position', element.dataset.position);
    li.setAttribute('data-salary', element.dataset.salary);
    li.setAttribute('data-age', element.dataset.age);

    ul.appendChild(li);
  }
}

function salaryToNumber(str) {
  return +str.replaceAll('$', '').replaceAll(',', '');
}

function getEmployees(list) {
  return [...list];
}

sortList(employeesList);
