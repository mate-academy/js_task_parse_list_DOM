'use strict';

const listElem = document.querySelector('ul');

function sortList(list) {
  const liCollection = list.children;
  const arr = Array.from(liCollection);

  arr.sort((a, b) => {
    const aElem = strToNumb(a.getAttribute('data-salary'));
    const bElem = strToNumb(b.getAttribute('data-salary'));

    return bElem - aElem;
  });

  list.innerHTML = '';

  for (let i = 0; i < arr.length; i++) {
    list.appendChild(arr[i]);
  }

  function strToNumb(str) {
    const newStr = str.replace('$', '');

    return Number(newStr.replace(',', '.'));
  }
}

function getEmployees(list) {
  const liCollection = list.children;
  const EmployeesArray = [];

  for (let i = 0; i < liCollection.length; i++) {
    EmployeesArray.push({
      name: liCollection[i].textContent.trim(),
      position: liCollection[i].getAttribute('data-position'),
      salary: liCollection[i].getAttribute('data-salary'),
      age: liCollection[i].getAttribute('data-age'),
    });
  }

  return EmployeesArray;
}

getEmployees(listElem);
sortList(listElem);
