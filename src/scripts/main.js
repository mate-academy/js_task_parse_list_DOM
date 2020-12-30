'use strict';

const parsed = { ...document.querySelectorAll('li') };

function sortList(list) {
  const people = [];

  for (const person in list) {
    people.push({
      name: list[person].innerText,
      position: list[person].dataset.position,
      salary: +(list[person].dataset.salary).slice(1).replace(/,/g, ''),
      age: list[person].dataset.age,
    });
  }

  const sortedBySalary = [ ...people ].sort((a, b) => +b.salary - +a.salary);

  for (const coworker in list) {
    list[coworker].innerText = sortedBySalary[coworker].name;
    list[coworker].dataset.position = sortedBySalary[coworker].position;
    list[coworker].dataset.salary = sortedBySalary[coworker].salary;
    list[coworker].dataset.age = sortedBySalary[coworker].age;
  }

  return sortedBySalary;
}
sortList(parsed);

function getEmployees(list) {
  const people = [];

  for (const person in list) {
    people.push({
      name: list[person].innerText,
      position: list[person].dataset.position,
      salary: list[person].dataset.salary,
      age: list[person].dataset.age,
    });
  }

  return people;
}
getEmployees(parsed);
