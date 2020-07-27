'use strict';

const arrObjects = [];
const liItems = document.querySelectorAll('li');

function convertToNumber(paramString) {
  const arrParStr = +[...paramString].slice(1).join('').split(',').join('');

  return arrParStr;
}

function sortList(paramList) {
  paramList.sort(function(a, b) {
    if (a.salary < b.salary) {
      return 1;
    }

    if (a.salary > b.salary) {
      return -1;
    }

    return 0;
  });

  const listUl = document.querySelector('ul');

  listUl.innerHTML = '';

  paramList.forEach(element => {
    listUl.innerHTML += `<li>
        data-name=${element.name};
        data-position="${element.position}";
        data-salary="${element.salary}";
        data-age="${element.age}";        
      </li>`;
  });
}

function getEmployees(par) {
  for (let index = 0; index < par.length; index++) {
    const temp = {};

    temp.name = par[index].innerText;
    temp.position = par[index].dataset.position;
    temp.salary = convertToNumber(par[index].dataset.salary);
    temp.age = par[index].dataset.age;
    arrObjects.push(temp);
  }
}
sortList(liItems);
getEmployees(liItems);
