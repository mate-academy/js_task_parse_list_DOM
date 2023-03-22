'use strict';

const arrayLike = document.querySelectorAll('li');

const arrayReal = [];

function getEmployees() {
  for (let i = 0; i < arrayLike.length; i++) {
    const item = arrayLike[i].dataset;
    let itemReal = { ...item };

    itemReal = {
      name: arrayLike[i].innerText, ...itemReal,
    };

    arrayReal.push(itemReal);
  }

  return arrayReal;
}

getEmployees();

const arrayNew = [];

function sortList() {
  for (let i = 0; i < arrayReal.length; i++) {
    arrayNew.push({ ...arrayReal[i] });
  }

  for (let i = 0; i < arrayNew.length; i++) {
    arrayNew[i].salary = +arrayNew[i].salary.replace(/\D/g, '');
  }

  arrayNew.sort((a, b) => b.salary - a.salary);

  for (let i = 0; i < arrayNew.length; i++) {
    arrayNew[i].salary = '$' + arrayNew[i].salary.toLocaleString('en-US');

    for (let j = 0; j < arrayReal.length; j++) {
      if (arrayReal[j].name === arrayNew[i].name) {
        document.querySelectorAll('li')[i].innerText = arrayNew[i].name;

        document.querySelectorAll('li')[i].dataset.position
        = arrayNew[i].position;

        document.querySelectorAll('li')[i].dataset.salary = arrayNew[i].salary;

        document.querySelectorAll('li')[i].dataset.age = arrayNew[i].age;
      }
    }
  }
}

sortList();
