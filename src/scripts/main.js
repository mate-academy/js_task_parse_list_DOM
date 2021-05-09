'use strict';

const list = document.querySelector('ul');

list.innerHTML = sortList(list);
getEmployees(list);

function getEmployees(rawList) {
  return Array.from(rawList.children).map((li) => {
    const employee = {
      ...li.dataset,
      name: li.innerText,
    };

    return employee;
  });
}

function sortList(input) {
  const resultList = getEmployees(input);

  resultList.sort((a, b) => {
    const regex = new RegExp(',', 'g');
    const aSalary = a.salary.replace('$', '').replace(regex, '');
    const bSalary = b.salary.replace('$', '').replace(regex, '');

    return bSalary - aSalary;
  });

  return `
        <ul> 
        ${resultList.map((element) => `
            <li 
            data-position="${element.position}"
            data-salary=${element.salary.toLocaleString()}
            data-age=${element.age}> 
            ${element.name}
            </li>
        `).join('')}
        </ul>
      `;
}
