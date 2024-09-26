'use strict';

const listOfEmployees = document.querySelectorAll('li');

function parseSalaryToNumber(str) {
  return parseFloat(str.replace(/[^\d.-]/g, ''));
}

function sortList(list) {
  const sortedList = [...list].sort((li1, li2) => {
    const salary1 = parseSalaryToNumber(li1.dataset.salary);
    const salary2 = parseSalaryToNumber(li2.dataset.salary);

    return salary2 - salary1;
  });

  const parentOfLi = list[0].parentElement;

  parentOfLi.innerHTML = '';

  for (const item of sortedList) {
    parentOfLi.appendChild(item);
  }
}

function getEmployees(list) {
  return [...list].map(employee => {
    return {
      name: employee.innerText.trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
