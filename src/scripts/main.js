'use strict';

function sortList() {
  const ulElement = document.querySelector('ul');
  const liElements = document.querySelectorAll('li');

  const liArray = [...liElements];

  liArray.sort(function(li1, li2) {
    let salary1 = li1.getAttribute('data-salary');
    let salary2 = li2.getAttribute('data-salary');

    salary1 = salary1.replace('$', '').replace(',', '');
    salary2 = salary2.replace('$', '').replace(',', '');

    salary1 = parseFloat(salary1);
    salary2 = parseFloat(salary2);

    return salary2 - salary1;
  });

  liArray.forEach(function(li) {
    ulElement.appendChild(li);
  });
}

function getEmployees() {
  const liElements = document.querySelectorAll('li');
  const liArray = [...liElements];

  const finishArrWithObj = [];

  liArray.forEach(function(li) {
    const objLiElem = {
      name: '',
      position: '',
      salary: '',
      age: '',
    };

    const text = li.textContent.trim();

    const salaryClass = li.getAttribute('data-salary');
    const positionClass = li.getAttribute('data-position');
    const ageClass = li.getAttribute('data-age');

    objLiElem.name = text;
    objLiElem.position = positionClass;
    objLiElem.salary = salaryClass;
    objLiElem.age = ageClass;
    finishArrWithObj.push(objLiElem);
  });
}

sortList();

getEmployees();
