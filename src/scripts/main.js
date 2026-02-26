'use strict';

function extractNumberFromString(textValue) {
  let extractedCharacters = '';

  for (const char of textValue) {
    if (isNaN(char)) {
      continue;
    }

    extractedCharacters += char;
  }

  return +extractedCharacters;
}

function getEmployees(list) {
  return [...list.childNodes]
    .filter((el) => el.nodeType === 1 && el.dataset.salary)
    .map((el) => ({
      name: el.textContent.trim(),
      position: el.dataset.position,
      salary: extractNumberFromString(el.dataset.salary),
      age: extractNumberFromString(el.dataset.age),
    }));
}

function sortList(list) {
  getEmployees(list)
    .sort((el1, el2) => {
      const el1Salary = el1.salary;
      const el2Salary = el2.salary;

      if (el1Salary > el2Salary) {
        return -1;
      } else if (el1Salary < el2Salary) {
        return 1;
      } else {
        return 0;
      }
    })
    .forEach((el) => {
      /* I don't want to create new nodes and delete old ones
       * when I can just rearrange existing ones
       * because that teaches bad practices
       */
      const elNode = employees.find(
        (employee) => employee.textContent.trim() === el.name,
      );

      list.insertAdjacentElement('beforeend', elNode);
    });
}

const employeeList = document.querySelector('ul:has(>[data-salary]');

const employees = [...document.querySelectorAll('ul>[data-salary]')];

sortList(employeeList);
