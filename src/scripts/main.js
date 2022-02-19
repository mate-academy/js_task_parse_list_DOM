'use strict';

const employees = document.querySelectorAll('li');

function sortList(list) {
  const employeesArray = getEmployees(list);

  function helper(numberAsString) {
    let resultString;

    if (numberAsString[0] === '$') {
      resultString = numberAsString.slice(1);
    }

    if (typeof (parseInt(resultString.split(',').join('')))
    === 'number') {
      resultString = parseInt(resultString.split(',').join(''));
    }

    return resultString;
  }

  employeesArray.sort((empl1, empl2) =>
    helper(empl2.salary) - helper(empl1.salary));

  // variant with replacing the initial list

  /* for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = employeesArray[i].name;
    list[i].dataset.position = employeesArray[i].position;
    list[i].dataset.salary = employeesArray[i].salary;
    list[i].dataset.age = employeesArray[i].age;
  } */

  // variant with creating a new list after the initial list

  const newHeader = document.createElement('h1');

  newHeader.innerHTML = 'List of employees sorted by salary';

  const newList = document.createElement('ul');

  document.body.append(newHeader, newList);

  for (let i = 0; i < employeesArray.length; i++) {
    newList.insertAdjacentHTML('beforeend', `
      <li
        data-position="${employeesArray[i].position}"
        data-salary="${employeesArray[i].salary}"
        data-age="${employeesArray[i].salary}"
      >
        ${employeesArray[i].name}
      </li>`);
  }
}

function getEmployees(list) {
  const result = [];

  for (const elem of list) {
    const employee = {
      name: elem.innerHTML,
      position: elem.dataset.position,
      salary: elem.dataset.salary,
      age: elem.dataset.age,
    };

    result.push(employee);
  }

  return result;
}

getEmployees(employees);

sortList(employees);
