'use strict';

const salaryList = document.querySelectorAll('ul li');

function sortList(list) {
  const salaryArray = Array.from(list).map((element) => {
    const salary = Number(element.dataset.salary.replace(/[$,]/g, ''));

    return { element, salary };
  });

  salaryArray.sort((a, b) => b.salary - a.salary);

  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  salaryArray.forEach((item) => {
    ul.appendChild(item.element);
  });
}

function getEmployees(list) {
  return Array.from(list).map((element) => {
    return {
      name: element.textContent.trim(),
      position: element.dataset.position,
      salary: Number(element.dataset.salary.replace(/[$,]/g, '')),
      age: Number(element.dataset.age),
    };
  });
}

sortList(salaryList);

getEmployees(salaryList);

// const employeList = getEmployees(salaryList);

// console.log(employeList);
