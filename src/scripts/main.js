'use strict';

const listUser = document.querySelectorAll('li');

function sortList(list) {
  const result = [...list].sort((a, b) =>
    b.dataset.salary.slice(1).split(',').join('')
     - a.dataset.salary.slice(1).split(',').join(''));

  const userUl = document.querySelector('ul');
  const userUlNew = document.createElement('ul');

  userUlNew.innerHTML = `
  ${result.map(text => `<li
  data-position=${text.dataset.position}
  data-salary=${text.dataset.salary}
  data-age=${text.dataset.age}
>
  ${text.textContent}</li>`).join('')}
  `;

  userUl.replaceWith(userUlNew);
}

function getEmployees(list) {
  return [...list].map((employee) => {
    let nameEmployee = employee.innerText;

    nameEmployee = nameEmployee.replace(/\r|\n/g, '');

    nameEmployee = nameEmployee.replace('        ', '');

    const index = nameEmployee.indexOf(' ');

    return {
      name: nameEmployee.slice(0, index),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

sortList(listUser);
getEmployees(listUser);
