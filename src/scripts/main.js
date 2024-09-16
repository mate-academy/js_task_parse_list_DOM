'use strict';

const liElements = document.querySelectorAll('li');

function salaryToNumber(string) {
  return +string.slice(1).replaceAll(',', '');
}

function getEmployees(list) {
  const persons = [];

  for (const item of list) {
    persons.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  }

  return persons;
}

function sortList(list) {
  const persons = getEmployees(list);

  persons.sort((a, b) => salaryToNumber(b.salary) - salaryToNumber(a.salary));

  for (let i = 0; i < persons.length; i++) {
    list[i].textContent = persons[i].name;
    list[i].dataset.position = persons[i].position;
    list[i].dataset.salary = persons[i].salary;
    list[i].dataset.age = persons[i].age;
  }
}

sortList(liElements);
