'use strict';

const list = document.querySelectorAll('li');
// const ul = document.querySelector('ul');

const employee = [];

function getEmployees(empList) {
  empList.forEach((item) => employee.push(parseObj(item)));
}

function parseObj(obj) {
  return {
    name: obj.innerHTML.trim(),
    position: obj.getAttribute('data-position'),
    salary: formatSalary(obj.getAttribute('data-salary')),
    age: obj.getAttribute('data-age'),
  };
}

function sortList(empArr) {
  empArr.sort((item1, item2) => item2.salary - item1.salary);
}

function formatSalary(salaryString) {
  const result = salaryString.replace('$', '');

  return Number(result.replaceAll(',', ''));
}

getEmployees(list);
sortList(employee);

// ul.innerHTML = '';

// employee.forEach((emp) => {
//   const li = document.createElement('li');

//   li.textContent = emp.name;
//   li.setAttribute('data-position', emp.position);
//   li.setAttribute('data-salary', `$${emp.salary.toLocaleString()}`);
//   li.setAttribute('data-aga', emp.age);
//   ul.appendChild(li);
// });

for (let i = 0; i < employee.length; i++) {
  const li = list[i];

  li.textContent = employee[i].name;
  li.setAttribute('data-position', employee[i].position);
  li.setAttribute('data-salary', `$${employee[i].salary.toLocaleString()}`);
  li.setAttribute('data-aga', employee[i].age);
}
