'use strict';

const elements = document.querySelectorAll('ul li');
const elementsArray = Array.from(elements);

function cleanSalary(salaryString) {
  return Number(salaryString.replace(/[$,]/g, ''));
}

function sortList() {
  elementsArray.sort((a, b) => {
    const salaryA = cleanSalary(a.dataset.salary);
    const salaryB = cleanSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  const list = document.querySelector('ul');

  list.innerHTML = '';
  elementsArray.forEach((item) => list.appendChild(item));

  function getEmployees() {
    return elementsArray.map((item) => {
      const personName = item.textContent.trim();
      const position = item.dataset.position;
      const salary = cleanSalary(item.dataset.salary);
      const age = Number(item.dataset.age);

      return {
        personName,
        position,
        salary,
        age,
      };
    });
  }

  getEmployees();
}

sortList();
