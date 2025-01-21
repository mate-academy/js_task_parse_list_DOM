'use strict';

const array = [...document.querySelectorAll('li')];
const users = [];
let sortUsers = null;

for (let i = 0; i < array.length; i++) {
  const user = array[i];

  users.push({
    name: user.innerText,
    position: user.dataset.position,
    salary: user.dataset.salary,
    age: user.dataset.age,
  });
}

function sortList(list) {
  const parseSalary = (salary) => parseInt(salary.replace(/[$,]/g, ''), 10);
  const result = list.sort(
    (a, b) => parseSalary(b.salary) - parseSalary(a.salary),
  );

  return result;
}

sortUsers = sortList(users);

function getEmployees(arrayUsers, sortArrayUsers) {
  for (let i = 0; i < users.length; i++) {
    arrayUsers[i].innerText = sortArrayUsers[i].name;
    arrayUsers[i].dataset.position = sortArrayUsers[i].position;
    arrayUsers[i].dataset.salary = sortArrayUsers[i].salary;
    arrayUsers[i].dataset.age = sortArrayUsers[i].age;
  }
}

getEmployees(array, sortUsers);
