'use strict';

function sortList(employees) {
  const element = employees[0].parentNode;
  const arrObj = getEmployees(employees);

  arrObj.sort((a, b) =>
    Number(a.salary) < Number(b.salary) ? 1 : -1);

  const ul = document.createElement('ul');

  for (let i = 0; i < arrObj.length; i++) {
    const li = document.createElement('li');

    li.innerHTML = arrObj[i].name;
    li.dataset.position = arrObj[i].position;
    li.dataset.salary = arrObj[i].salary;
    li.dataset.age = arrObj[i].age;
    ul.append(li);
  }

  element.replaceWith(ul);
}

function getEmployees(employees) {
  const arrDataSalary = [...employees].map(elem => elem.dataset.salary);
  const arrDataPosition = [...employees].map(elem => elem.dataset.position);
  const arrDataAge = [...employees].map(elem => elem.dataset.age);
  const arrLiInnerHtml = [...employees].map(elem => elem.innerHTML);
  const arrName = [];
  const arrSalary = [];
  const arrObj = [];

  for (const str of arrLiInnerHtml) {
    let empName = str.replace(/[^a-z ]/ig, '');

    empName = empName.trim();
    arrName.push(empName);
  }

  for (const str of arrDataSalary) {
    const salary = str.replace(/[^0-9]/ig, '');

    arrSalary.push(salary);
  }

  for (let i = 0; i < arrName.length; i++) {
    const obj = {
      name: arrName[i],
      position: arrDataPosition[i],
      salary: arrSalary[i],
      age: arrDataAge[i],
    };

    arrObj.push(obj);
  }

  return arrObj;
}

const elements = document.querySelectorAll('li');

sortList(elements);

getEmployees(elements);
