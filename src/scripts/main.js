'use strict';

const list = document.querySelectorAll('li');

const convertNum = (numStr) => {
  const cleanedNumStr = numStr.split('$').join('').split(',').join('');

  return parseInt(cleanedNumStr);
};

const sortList = (htmlList) => {
  const sortedList = Array.from(htmlList).sort((a, b) => {
    const salaryA = convertNum(a.dataset.salary);
    const salaryB = convertNum(b.dataset.salary);

    return salaryB - salaryA;
  });

  const parentElem = htmlList[0].parentNode;

  sortedList.forEach(li => parentElem.appendChild(li));
};

const getEmployees = (htmlList) => {
  const result = [];

  for (const li of htmlList) {
    const employee = {
      name: li.textContent,
      position: li.dataset.position,
      salary: convertNum(li.dataset.salary),
      age: parseInt(li.dataset.age),
    };

    result.push(employee);
  }

  return result;
};

sortList(list);

getEmployees(list);
