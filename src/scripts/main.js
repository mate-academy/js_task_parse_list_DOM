'use strict';

// write code here
const employees = [...document.querySelectorAll('li')];

function getNumber(elString) {
  return Number(elString.dataset.salary.replace(',', '').slice(1));
}

function sortList(list) {
  list
    .sort((el1, el2) => getNumber(el2) - getNumber(el1))
    .forEach((el) => document.querySelector('ul').appendChild(el));
}

function getEmployees(list) {
  return list.map((el) => {
    return {
      name: el.textContent,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    };
  });
}

sortList(employees);
getEmployees(employees);

/* const positions = [...document.element.getAttribute('data-position')].map(
  (el) => el.textContent,
);
const salaries = [...document.querySelectorAll('data-salary')].map(
  (el) => el.textContent,
);
const ages = [...document.querySelectorAll('data-age')].map(
  (el) => el.textContent,
);

console.log(
  document.li.dataset.positionss,
  document.li.dataset.salaries,
  document.li.dataset.ages,
);
 document.insertAdjacentElement(beforeend, li)  =
  positions;

function sortBySalary() {
    return emploees.sort(el=>el.getAttribute('data-salary'))
}
function emploeesData(emploees) {
  let object = {}
  object.name = this.emploees
  object.position = this.positions
  object.salary = this.salaries
  object.age = this.ages

  for(let li of ul) {

    let name = li.textContent;
    li.innerHTML = emploee[name];
  }


  for(let li of document.querySelectorAll('data-position')) {

    let field = li.getAttribute('data-position');
    li.innerHTML = position[field];
    document.querySelector('li').textContent="hvjhv"
  }
*/
