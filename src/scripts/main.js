'use strict';

function convertToNum(item, key) {
  return +item[key].replace(/\$|,/g, '') || undefined;
}

function getEmployees() {
  const resultArray = [];
  const employeeList = document.querySelectorAll('li');

  employeeList.forEach(
    item => resultArray.push({
      ...item.dataset, name: item.innerText,
    })
  );

  for (const employee of resultArray) {
    employee.salary = convertToNum(employee, 'salary');
  }

  return resultArray;
}

function sortList(array, key) {
  return array.sort((prev, cur) => cur[key] - prev[key]);
}

const employeeArray = getEmployees();
const employeeSorted = sortList(employeeArray, 'salary');
const listElement = document.querySelector('ul');

listElement.innerHTML = `${employeeSorted.map(item =>
  `<li data-position=${item.position}
    data-salary=${item.salary}
    data-age=${item.age}>${item.name}</li>`)}`.replaceAll(',', '');
