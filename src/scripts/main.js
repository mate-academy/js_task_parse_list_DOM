'use strict';

const body = document.body;
const allLi = body.children[1];

function convertToNumber(string) {
  const withoutDolar = string.replace('$', '');
  const withoutComa = withoutDolar.replaceAll(',', '');

  return Number(withoutComa);
}

function sortList(list) {
  list.sort((a, b) =>
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary));

  for (let i = 0; i < list.length; i++) {
    allLi.append(list[i]);
  }

  return list;
}

function getEmployees(list) {
  return list.map(li => {
    const employee = {
      name: li.innerText.split(' ')[0],
      ...li.dataset,
    };

    return employee;
  });
}

sortList([...allLi.children]);
getEmployees([...allLi.children]);
