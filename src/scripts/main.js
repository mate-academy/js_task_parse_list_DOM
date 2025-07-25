'use strict';

const employeesList = document.body.querySelectorAll('li');

function getEmployees(list) {
  return Array.from(list);
}

getEmployees(employeesList);

function sortList(list) {
  const listNew = Array.from(list);

  const emplArr = listNew.map((empl) => {
    return {
      name: empl.innerHTML.trim(),
      postion: empl.dataset.position,
      salary: Number(empl.dataset.salary.replace(/[$,]/g, '')),
      age: Number(empl.dataset.age),
    };
  });

  const sortedEmplArr = emplArr.sort((a, b) => b.salary - a.salary);

  const listTypeList = list;

  for (let i = 0; i < listTypeList.length; i++) {
    listTypeList[i].innerHTML = sortedEmplArr[i].name;
    listTypeList[i].dataset.position = sortedEmplArr[i].postion;
    listTypeList[i].dataset.salary = sortedEmplArr[i].salary;
    listTypeList[i].dataset.age = sortedEmplArr[i].age;
  }

  return {
    sr: sortedEmplArr,
    ltl: listTypeList,
  };
}

sortList(employeesList);
