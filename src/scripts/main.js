'use strict';

const arrayOfEmployees = [...document.querySelectorAll('li')];

function stringToDigit(str) {
  const digit = +str.replace(/\D/g, '');

  return digit;
}

function sortList(list) {
  const sortedList = document.querySelector('ul');
  const sorted = list.sort((firstPerson, secondPerson) => {
    return (
      stringToDigit(secondPerson.dataset.salary) -
      stringToDigit(firstPerson.dataset.salary)
    );
  });

  sortedList.innerHTML = '';
  sortedList.append(...sorted);

  return sortedList;
}

function getEmployees(list) {
  const arrayOfEmployeesOdj = list.reduce((acc, el) => {
    const obj = [
      ...acc,
      {
        name: el.innerText,
        position: el.dataset.position,
        salsry: el.dataset.salary,
        age: el.dataset.age,
      },
    ];

    return obj;
  }, []);

  return arrayOfEmployeesOdj;
}

sortList(arrayOfEmployees);
getEmployees(arrayOfEmployees);
