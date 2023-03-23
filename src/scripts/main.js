'use strict';

function toNumber(Str) {
  const numb = +Str.replace(/\D/g, '');

  return numb;
}

function sortList(list) {
  const arrayNew = [...list].sort((a, b) => {
    const salaryA = toNumber(a.dataset.salary);
    const salaryB = toNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  document.querySelector('ul').innerHTML = '';

  for (const item of arrayNew) {
    document.querySelector('ul').innerHTML += `
      <li
        data-positiion=${item.dataset.position}
        data-salary=${item.dataset.salary}
        data-age=${item.dataset.age}
      >
        ${item.textContent.trim()}
      </li>
    `;
  }
}

function getEmployees(list) {
  const arrayReal = [...list].map(item => {
    return {
      name: item.innerText, ...item.dataset,
    };
  });

  return arrayReal;
}

sortList(document.querySelectorAll('li'));
getEmployees(document.querySelectorAll('li'));
