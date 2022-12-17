'use strict';

// write code here
const items = document.querySelectorAll('li');

// sorts an array
function sortList(list) {
  const arrEmpl = [...list].map(item => ({
    ...item.dataset,
    'name': item.innerText,
  }));

  arrEmpl.forEach(item => {
    item.salary = item.salary.replace(/[^a-zа-яё0-9\s]/gi, '');
    item.salary = Number(item.salary);
  });

  return arrEmpl.sort((a, b) => b.salary - a.salary);
}

function getEmployees(sortedArray, list) {
  for (let i = 0; i < list.length; i++) {
    list[i].dataset.position = sortedArray[i].position;
    list[i].dataset.salary = sortedArray[i].salary;
    list[i].dataset.age = sortedArray[i].age;
    list[i].innerText = sortedArray[i].name;
  }
}
getEmployees(sortList(items), items);
