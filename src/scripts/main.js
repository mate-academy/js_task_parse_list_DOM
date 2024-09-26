'use strict';

const people = document.querySelectorAll('li');

function sortList(list) {
  const listSort = [...list].sort((a, b) => {
    function GetNumSalary(item) {
      return Number(item.dataset.salary.slice(1).split(',').join(''));
    }

    return GetNumSalary(b) - GetNumSalary(a);
  });

  for (let i = 0; i < listSort.length; i++) {
    list[0].parentElement.append(listSort[i]);
  }
}
sortList(people);

function getEmployees(list) {
  const allEmployees = [...list];
  const result = [];

  allEmployees.forEach(item => {
    result.push({
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  });

  return result;
}

getEmployees(people);
