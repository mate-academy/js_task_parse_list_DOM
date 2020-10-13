'use strict';

function getEmployees() {
  const employeesData = document.querySelectorAll('li');

  return [...employeesData].map(text => {
    return {
      name: text.innerText,
      position: text.dataset.position,
      salary: text.dataset.salary,
      age: text.dataset.age,
      formatedSalary: Number(text
        .dataset
        .salary
        .replace(/[$,]/g, '')),
    };
  });
}

const employeesList = getEmployees();

function sortList(list) {
  return list.sort((a, b) => b.formatedSalary - a.formatedSalary);
}

const sortedList = sortList(employeesList);

const elements = document.querySelectorAll('li');

for (let i = 0; i < elements.length; i++) {
  elements[i].innerText = sortedList[i].name;
  elements[i].dataset.position = sortedList[i].position;
  elements[i].dataset.salary = sortedList[i].salary;
  elements[i].dataset.age = sortedList[i].age;
}
