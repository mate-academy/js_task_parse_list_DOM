'use strict';

const list = [...document.querySelectorAll('li')];

function salaryToNumber(salary) {
  return parseInt(salary.replace('$', '').replaceAll(',', ''));
}

function sortBySalary(unsortedList) {
  return unsortedList.sort(
    (el1, el2) =>
      salaryToNumber(el2.dataset.salary) - salaryToNumber(el1.dataset.salary),
  );
}

const sortedList = sortBySalary(list);

const ul = document.querySelector('ul');

ul.append(...sortedList);

function getEmployees(listOfLi) {
  const listOfEmployees = listOfLi.map((li) => {
    const employee = {
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    };

    return employee;
  });

  return listOfEmployees;
}

getEmployees(sortedList);
