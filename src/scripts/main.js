'use strict';

function sortList(arr) {
  const sortedArr = arr.sort((firstEmployee, secondEmployee) =>
    convertToNumber(secondEmployee.salary)
    - convertToNumber(firstEmployee.salary)
  );

  for (let i = 0; i < listOfEmployyes.length; i++) {
    listOfEmployyes[i].dataset.position = sortedArr[i].position;
    listOfEmployyes[i].dataset.salary = sortedArr[i].salary;
    listOfEmployyes[i].dataset.age = sortedArr[i].age;
    listOfEmployyes[i].textContent = sortedArr[i].name;
  }
}

function getEmployees(list) {
  const employees = [];

  for (const item of list) {
    const employee = {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    employees.push(employee);
  }

  return employees;
};

function convertToNumber(string) {
  const number = +string.replace('$', '').replace(',', '');

  return number;
}

const listOfEmployyes = document.querySelectorAll('li');
const employeesArray = getEmployees(listOfEmployyes);

sortList(employeesArray);
