'use strict';

const parsed = [ ...document.querySelectorAll('li') ];

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

const sortedWithFunction = sortList(parsed);

for (const coworker in parsed) { // for (const coworker in list)
  parsed[coworker].innerText = sortedWithFunction[coworker].name;
  parsed[coworker].dataset.position = sortedWithFunction[coworker].position;
  parsed[coworker].dataset.salary = sortedWithFunction[coworker].salary;
  parsed[coworker].dataset.age = sortedWithFunction[coworker].age;
}
