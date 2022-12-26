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
  const result = [];

  list.forEach((employee) => {
    const resultUser = {};
    let nameEmployee = employee.innerText;

    nameEmployee = nameEmployee.replace(/\r|\n/g, '');

    nameEmployee = nameEmployee.replace('        ', '');

    const index = nameEmployee.indexOf(' ');

    resultUser.name = nameEmployee.slice(0, index);
    resultUser.position = employee.dataset.position;
    resultUser.salary = employee.dataset.salary;
    resultUser.age = employee.dataset.age;
    result.push(resultUser);
  });

  return result;
}

sortList(listUser);
getEmployees(listUser);
