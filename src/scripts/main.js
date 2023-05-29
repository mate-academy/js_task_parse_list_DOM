'use strict';

const peopleList = document.querySelector('ul');
const liElements = peopleList.querySelectorAll('li');

function sortList(list) {
  function convertToNumber(salary) {
    return Number(salary.replace(/[^0-9.-]+/g, ''));
  }

  const liArray = Array.from(liElements);

  liArray.sort(function(a, b) {
    const salaryA = convertToNumber(a.getAttribute('data-salary'));
    const salaryB = convertToNumber(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  liArray.forEach(function(li) {
    list.appendChild(li);
  });
}

function getEmployees(list) {
  const dataArray = [];

  for (let i = 0; i < liElements.length; i++) {
    const li = liElements[i];
    const employeeName = li.textContent.trim();
    const position = li.getAttribute('data-position');
    const salary = li.getAttribute('data-salary');
    const age = li.getAttribute('data-age');

    const personObj = {
      name: employeeName,
      position,
      salary,
      age,
    };

    dataArray.push(personObj);
  }

  return dataArray;
}

sortList(peopleList);
getEmployees(peopleList);
