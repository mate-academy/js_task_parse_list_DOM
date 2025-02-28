'use strict';

const ulList = document.querySelector('ul');
const employee = Array.from(ulList.querySelectorAll('li'));

function sort() {
  employee.sort((a, b) => {
    return (
      parseInt(b.dataset.salary.replace(/[$,]/g, '')) -
      parseInt(a.dataset.salary.replace(/[$,]/g, ''))
    );
  });

  ulList.innerHTML = '';
  employee.forEach((item) => ulList.appendChild(item));
}

function getEmployees() {
  return employee.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseInt(item.dataset.salary.replace(/[$,]/g, '')),
    age: parseInt(item.dataset.age),
  }));
}

sort();
getEmployees();
