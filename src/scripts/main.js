'use strict';

const employeesList = document.getElementsByTagName('li');

const salariesFixed = str => +str.replace(/\D/g, '');

function sortList(list) {
  const sortedList = [...list].sort((a, b) => {
    return salariesFixed(b.dataset.salary) - salariesFixed(a.dataset.salary);
  });

  sortedList.forEach(item => item.parentElement.appendChild(item));
}

function getEmployees(list) {
  return [...list].map(el => {
    return {
      name: el.textContent.trim(),
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    };
  });
}

sortList(employeesList);
getEmployees(employeesList);
