'use strict';

const humans = document.querySelector('ul');

function clearString(string) {
  return string.slice(1).split(',').join('');
}

function sortList(list) {
  const listChildrenArray = [...list.children];

  return listChildrenArray.sort((prChild, curChild) => {
    const prChildSalary = clearString(prChild.dataset.salary);
    const curChildSalary = clearString(curChild.dataset.salary);

    return curChildSalary - prChildSalary;
  });
}

const sortedHumanList = sortList(humans);

humans.append(...sortedHumanList);

function getEmployees(list) {
  const humanObjArr = [];
  const childrenArr = [...list.children];

  for (let i = 0; i < childrenArr.length; i++) {
    humanObjArr.push(
      {
        name: childrenArr[i].innerText,
        position: childrenArr[i].dataset.position,
        salary: childrenArr[i].dataset.salary,
        age: childrenArr[i].dataset.age,
      }
    );
  }

  return humanObjArr;
}

getEmployees(humans);
sortList(humans);
