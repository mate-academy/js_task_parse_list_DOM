'use strict';

const unsortedList = document.querySelectorAll('li');

function convertSalary(string) {
  return Number(string.replace(/\$/g, '').split(',').join(''));
}

function getEmployees(list) {
  return [...list].map(item => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: convertSalary(item.dataset.salary),
      age: item.dataset.age,
    };
  }
  );
}

function sortList(list) {
  const sorted = getEmployees(list)
    .sort((person1, person2) => person2.salary - person1.salary);

  for (let i = 0; i < sorted.length; i++) {
    list[i].innerText = sorted[i].name;
    list[i].dataset.position = sorted[i].position;
    list[i].dataset.salary = `$${(sorted[i].salary).toLocaleString()}`;
    list[i].dataset.age = sorted[i].age;
  }
}

sortList(unsortedList);
