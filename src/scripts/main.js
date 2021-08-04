'use strict';

const list = document.querySelector('ul');
const listItems = [...list.children];
const liTexts = listItems.map(el => el.innerText);
const liTextData = listItems.map(el => el.dataset);

function getEmployees() {
  const employArr = [];

  for (let i = 0; i < liTexts.length; i++) {
    employArr.push({});
    employArr[i].name = liTexts[i];
    employArr[i].position = liTextData[i].position;
    employArr[i].salary = liTextData[i].salary;
    employArr[i].age = liTextData[i].age;
    listItems[i].innerText = employArr[i].name;
  };

  return employArr;
};

function sortList(listArray) {
  const parseSalary = (string) => {
    return parseFloat(string.substring(1).replace(',', ''));
  };

  listArray.sort(
    (a, b) => parseSalary(b.dataset.salary)
      - parseSalary(a.dataset.salary)
  );
};

getEmployees();
sortList(listItems);
list.append(...listItems);
