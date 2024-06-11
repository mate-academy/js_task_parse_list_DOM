'use strict';

const listOfgetEmployees = [...document.querySelectorAll('li')];
const ulList = document.querySelector('ul');

const getEmployees = (list) => {
  return list.map((item) => ({
    name: item.innerText,
    position: item.getAttribute('data-position'),
    salary: item.getAttribute('data-salary'),
    age: parseInt(item.getAttribute('data-age'), 10),
  }));
};

const employees = getEmployees(listOfgetEmployees);

function salaryToNumber(salaryValue) {
  return Number(salaryValue.replace(/[,$]/g, ''));
}

function sortList(list) {
  return list.sort(
    (item1, item2) =>
      salaryToNumber(item2.salary) - salaryToNumber(item1.salary),
  );
}

const sorted = sortList(employees);

ulList.innerHTML = '';

sorted.forEach((element) => {
  const li = document.createElement('li');

  li.innerText = element.name;
  li.setAttribute('data-position', element.position);
  li.setAttribute('data-salary', element.salary);
  li.setAttribute('data-age', element.age);
  ulList.appendChild(li);
});
