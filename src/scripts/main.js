'use strict';

const listOfEmployees = document.querySelectorAll('li');

function getEmployees(list) {
  const listArr = [];

  for (let i = 0; i < listOfEmployees.length; i++) {
    const pushSalary = listOfEmployees[i].getAttribute('data-salary').slice(1);
    const li = listOfEmployees[i].textContent.replaceAll('\n', '').trim();
    const pos = listOfEmployees[i].getAttribute('data-position');
    const dataAge = listOfEmployees[i].getAttribute('data-age');

    listArr.push({
      name: li,
      position: pos,
      salary: pushSalary,
      age: dataAge,
    });
  }

  return listArr;
}

function CreateSortList(list) {
  const arr = [];

  for (let i = 0; i < listOfEmployees.length; i++) {
    let pushSalary = listOfEmployees[i].getAttribute('data-salary').slice(1);
    const li = listOfEmployees[i].textContent.replaceAll('\n', '').trim();

    pushSalary = Number(pushSalary.replaceAll(',', ''));

    arr.push({
      name: li,
      salary: pushSalary,
    });
  }

  arr.sort((a, b) => b.salary - a.salary);

  document.querySelector('ul').textContent = '';

  for (const li of arr) {
    const newElement = document.createElement('li');

    newElement.textContent = li.name;

    document.querySelector('ul').appendChild(newElement);
  }
}

getEmployees(listOfEmployees);
CreateSortList(listOfEmployees);
