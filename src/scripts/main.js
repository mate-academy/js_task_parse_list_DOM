'use strict';

const lis = document.querySelectorAll('li');

const liTexts = [...lis].map(el => el.innerText);
const liTextData = [...lis].map(el => el.dataset);

function getEmployees() {
  const employArr = [];

  for (let i = 0; i < liTexts.length; i++) {
    employArr.push({});
    employArr[i].name = liTexts[i];
    employArr[i].position = liTextData[i].position;
    employArr[i].salary = liTextData[i].salary;
    employArr[i].age = liTextData[i].age;
    lis[i].innerText = employArr[i].name;
  };

  return employArr;
};

const listArr = getEmployees();

function sortList() {
  const sortedArray = listArr.sort((a, b) => {
    let aString = a.salary;

    aString = parseFloat(aString.substring(1).replace(',', ''));

    let bString = b.salary;

    bString = parseFloat(bString.substring(1).replace(',', ''));

    return bString - aString;
  });

  return sortedArray;
};

const sorted = sortList();

for (let i = 0; i < liTexts.length; i++) {
  lis[i].innerText = sorted[i].name;
};
