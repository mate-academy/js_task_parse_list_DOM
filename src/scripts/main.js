'use strict';

// write code here


function parseSalary(salaryString) {
    return Number(salaryString.replace(/[^0-9.-]+/g, ""));
}

function sortList(list) {
    const items = Array.from(list.children);

    items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);
    return salaryB - salaryA; 
  });

  items.forEach(item => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map(item => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      age: Number(item.dataset.age),
      salary: parseSalary(item.dataset.salary),
    };
  });
}


const list = document.querySelector('ul');
sortList(list);
const employees = getEmployees(list);
console.log(employees); 