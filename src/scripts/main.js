'use strict';

const collection = document.querySelectorAll('li');

function getEmployees(list) {
  return [...list].map(element => {
    return {
      name: element.innerText,
      position: element.dataset.position,
      salary: +element.dataset.salary.match(/\d/g).join(''),
      age: +element.dataset.age,
    };
  });
}

function sortList(list, param = 'salary') {
  const sortedList = getEmployees(list)
    .sort((worker1, worker2) => worker2[param] - worker1[param]);

  for (let i = 0; i < sortedList.length; i++) {
    list[i].innerText = sortedList[i].name;
    list[i].dataset.position = sortedList[i].position;
    list[i].dataset.salary = sortedList[i].salary;
    list[i].dataset.age = sortedList[i].age;
  }
}

sortList(collection);
