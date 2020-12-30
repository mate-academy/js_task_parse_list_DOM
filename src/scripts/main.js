'use strict';

const people = document.querySelector('ul');

function MoneyStringToNumber(string) {
  return string.slice(1).split(',').join('');
}

function sortList(list) {
  const listChildrenArray = [...list.children];

  return listChildrenArray.sort((prChild, curChild) => {
    const prChildSalary = MoneyStringToNumber(prChild.dataset.salary);
    const curChildSalary = MoneyStringToNumber(curChild.dataset.salary);

    return curChildSalary - prChildSalary;
  });
}

const sortedPeopleList = sortList(people);

people.append(...sortedPeopleList);

function getEmployees(list) {
  const listChildrenArray = [...list.children];
  const peopleObjArray = [];

  for (let i = 0; i < listChildrenArray.length; i++) {
    peopleObjArray.push(
      {
        name: listChildrenArray[i].innerText,
        position: listChildrenArray[i].dataset.position,
        salary: listChildrenArray[i].dataset.salary,
        age: listChildrenArray[i].dataset.age,
      }
    );
  }

  return peopleObjArray;
}

getEmployees(people);
sortList(people);
