'use strict';

// write code here
// const list = [...document.querySelectorAll('li[data-salary]')];
// function sortList(list) {
//   const newArray = [...list.sort((a, b) => {
//     convertToNumber(b.dataset.salary) - convertToNumber(a.daseset.salary);
//   })];

//   newArray.forEach(item => list.append(item));
// }

// function convertToNumber (stringNumber) {
//   const number = stringNumber.replace("$"," ").split(",").join('');
//   return +number;
// }
//


'use strict';
const employeesList = document.querySelector('ul');

function getCleanSalary(salaryFromLi) {
  return parseInt(salaryFromLi.slice(1).replaceAll(',', ''));
}

function sortList(list) {
  const employeesArray = Array.from(list.children);
  employeesArray.sort(
    (a, b) =>
      getCleanSalary(b.getAttribute('data-salary')) -
      getCleanSalary(a.getAttribute('data-salary')),
  );
  employeesArray.forEach((emp) => employeesList.appendChild(emp));
}
function getEmployees(list) {
  const employeesArray = Array.from(list.children);
  return employeesArray.map((emp) => {
    return {
      name: emp.textContent,
      position: emp.getAttribute('data-position'),
      salary: emp.dataset.salary,
      age: emp.dataset.age,
    };
  });
}
sortList(employeesList);
getEmployees(employeesList);
