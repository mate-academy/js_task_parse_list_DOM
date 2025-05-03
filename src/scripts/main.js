'use strict';

const listElem = document.querySelector('ul');

sortList(listElem);

function sortList(list) {
  const employees = getEmployees(list);

  employees.sort((e1, e2) => e2.salary - e1.salary);

  const newListElements = employees
    .map(({ username, position, salary, age }) => {
      const salaryStr = formatBigNumber(salary);

      return `<li
        data-position="${position}"
        data-salary="$${salaryStr}"
        data-age="${age}"
      >
        ${username}
      </li>`;
    })
    .join('');

  list.innerHTML = newListElements;
}

function getEmployees(list) {
  const listElements = list.querySelectorAll('li');

  const employees = [...listElements].map((elem) => {
    const salary = Number(
      elem.dataset.salary.replace('$', '').replaceAll(',', ''),
    );

    return {
      username: elem.textContent.replaceAll('\n', '').trim(),
      position: elem.dataset.position,
      salary,
      age: Number(elem.dataset.age),
    };
  });

  return employees;
}

function formatBigNumber(number) {
  let formattedNumber = '';

  String(number)
    .split('')
    .reverse()
    .forEach((n, index) => {
      if (index % 3 === 0 && index !== 0) {
        formattedNumber = ',' + formattedNumber;
      }
      formattedNumber = n + formattedNumber;
    });

  return formattedNumber;
}
