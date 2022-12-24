'use strict';

const user = document.querySelectorAll('li');

function sortList(list) {
  const bod = document.querySelector('body');
  const userUl = document.querySelector('ul');

  userUl.remove();

  const userUlNew = document.createElement('div');

  const result = [...list].sort((a, b) =>
    b.dataset.salary.slice(1).split(',').join('')
     - a.dataset.salary.slice(1).split(',').join(''));

  userUlNew.innerHTML = `
  <ul>
  ${result.map(text => `<li> ${text.textContent}</li>`).join('')}
  </ul>
  `;
  bod.append(userUlNew);
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

sortList(user);
getEmployees(user);
