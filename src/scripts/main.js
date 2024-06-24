'use strict';

// write code here
'use strict';

const elemsList = [...document.querySelectorAll('li')];
const ulist = document.querySelector('ul');

function getEmployees(list) {
  return list.map((element) => {
    return {
      name: element.innerText,
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    };
  });
}

function sortList(list, ul) {
  function converToNumber(str) {
    return +str.replace(',', '').replace('$', '');
  }

  const sortLiForSalary = list.sort((a, b) => {
    return converToNumber(a.dataset.salary) - converToNumber(b.dataset.salary);
  });

  sortLiForSalary.forEach((elem) => {
    ul.insertAdjacentElement('afterbegin', elem);
  });
}

getEmployees(elemsList);
sortList(elemsList, ulist);
