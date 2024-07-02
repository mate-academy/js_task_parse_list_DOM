'use strict';

const list = document.querySelector('ul');

function transformInNum(str) {
  return parseInt(str.split(',').join('').slice(1));
}

function sortList(arr) {
  const newList = [...arr.children].sort(
    (elem1, elem2) =>
      transformInNum(elem1.dataset.salary) -
      transformInNum(elem2.dataset.salary),
  );

  return newList.forEach((obj) => arr.prepend(obj));
}

function getEmployees(array) {
  const result = [];

  for (const obj of [...array.children]) {
    const simpleObj = {
      name: obj.innerText,
      positition: obj.dataset.position,
      salary: obj.dataset.salary,
      age: obj.dataset.age,
    };

    result.push(simpleObj);
  }

  return result;
}

// const pageList = document.querySelector('ul');

// function normalize(stringSalary) {
//   return +stringSalary.split(',').join('').slice(1);
// }

// function sortList(array) {
//   const copyEmployeesChilds = [...array.children];

//   copyEmployeesChilds.sort((a, b) => {
//     return normalize(b.dataset.salary) - normalize(a.dataset.salary);
//   });

//   copyEmployeesChilds.forEach((employee) => array.append(employee));
// }

// function getEmployees(list) {
//   return [...list.children].reduce((array, child) => {
//     array.push({
//       name: child.innerText,
//       position: child.dataset.position,
//       age: child.dataset.age,
//       salary: child.dataset.salary,
//     });

//     return array;
//   }, []);
// }

sortList(list);
getEmployees(list);
