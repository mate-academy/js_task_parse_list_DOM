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

  /*for (let i = 0; i < employeesArray.length; i++) {
    list.append(employeesArray[i]);
  }*/

  return list;
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

sortList(employees);

getEmployees(employees);
