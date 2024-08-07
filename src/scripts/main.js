'use strict';

const set = document.querySelectorAll('li');

function sortList(list) {
  const collection = Array.from(list); // Перетворимо NodeList на масив

  for (let i = 0; i < collection.length; i++) {
    for (let j = 0; j < collection.length - i - 1; j++) {
      const salaryA = parseInt(
        collection[j].getAttribute('data-salary').slice(1).split(',').join(''),
      );
      const salaryB = parseInt(
        collection[j + 1]
          .getAttribute('data-salary')
          .slice(1)
          .split(',')
          .join(''),
      );

      if (salaryA < salaryB) {
        const temp = collection[j];

        collection[j] = collection[j + 1];
        collection[j + 1] = temp;
      }
    }
  }

  return collection;
}

const sortedList = sortList(set);

function getEmployees(list) {
  const employeesArr = [];

  for (const human of list) {
    const tempArr = {};

    tempArr.name = human.innerText;
    tempArr.position = human.dataset.position;
    tempArr.salary = human.dataset.salary;
    tempArr.age = human.dataset.age;
    employeesArr.push(tempArr);
  }

  return employeesArr;
}

getEmployees(sortedList);
