'use strict';

const sourceList = document.querySelectorAll('li');

function convertSalary(salary) {
  return Number(salary.replace(/\D/g, ''));
}

function getEmployees(list) {
  return [...list].map(el => {
    return {
      name: el.innerText,
      position: el.dataset.position,
      salary: convertSalary(el.dataset.salary),
      age: el.dataset.age,
    };
  }
  );
}

function sortList(list) {
  const newList = getEmployees(list).sort((a, b) => b.salary - a.salary);

  for (let i = 0; i < newList.length; i++) {
    list[i].innerText = newList[i].name;
    list[i].dataset.position = newList[i].position;
    list[i].dataset.salary = `$${(newList[i].salary).toLocaleString()}`;
    list[i].dataset.age = newList[i].age;
  }
}

sortList(sourceList);
