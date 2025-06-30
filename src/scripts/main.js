'use strict';

const list = document.querySelectorAll('li');
let array = [];

function sortList() {
  array = [];

  for (let i = 0; i < list.length; i++) {
    const fullName = list[i].innerText;
    const salary = list[i].getAttribute('data-salary');
    const position = list[i].getAttribute('data-position');
    const age = list[i].getAttribute('data-age');

    array.push({
      name: fullName,
      position: position,
      salary: salary,
      age: age,
    });
  }

  function salaryConvers() {
    for (let j = 0; j < array.length; j++) {
      const salary = array[j].salary.split('');

      salary.shift();

      const newSalary = salary.join('');
      const newSal = newSalary.replace(/,/g, '');
      const sal = Number(newSal);

      array[j].salary = sal;
    }

    array.sort((employee1, employee2) => employee2.salary - employee1.salary);
  }

  salaryConvers();
}

function getEmployees() {
  let newLi = document.createElement('li');

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[j].innerText === array[i].name) {
        let ulList = null;

        ulList = document.querySelector('ul');

        newLi = list[j].cloneNode(true);
        ulList.appendChild(newLi);
        list[j].remove();
      }
    }
  }

  return array;
}

sortList();
getEmployees();
