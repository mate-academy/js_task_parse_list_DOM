'use strict';

const employeeListItems = document.querySelectorAll('li');
const employeeListArray = Array.from(employeeListItems);

const convertToNumber = (salaryString) => {
  const numberString = salaryString.replace(/[^\d]/g, '');

  return parseInt(numberString, 10);
};

const sortList = (list) => {
  const sortedList = Array.from(list);

  sortedList.sort((a, b) => {
    const salaryA = convertToNumber(a.dataset.salary);
    const salaryB = convertToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  const parentElement = sortedList[0].parentNode;

  sortedList.forEach((item) => parentElement.appendChild(item));
};

const getEmployees = (list) => {
  const employeeObjects = [];

  list.forEach((item) => {
    const employee = {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: convertToNumber(item.dataset.salary),
      age: parseInt(item.dataset.age, 10),
    };

    employeeObjects.push(employee);
  });

  return employeeObjects;
};

// Call both functions
sortList(employeeListItems);
getEmployees(employeeListArray);
