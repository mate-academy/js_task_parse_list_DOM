'use strict';

const list = document.querySelectorAll('li');

function convertToNumber(str) {
  return parseInt(str.replace(/\D/g, ''));
}

const sortedList = [...list].sort((a, b) => {
  const salaryA = convertToNumber(a.dataset.salary);
  const salaryB = convertToNumber(b.dataset.salary);

  return salaryB - salaryA;
});

document.body.innerHTML = `
  <h1>List of employees</h1>
  <ul>
    ${sortedList.map(item => `
    <li 
      data-name = '${item.textContent}'
      data-position='${item.dataset.position}' 
      data-salary='${item.dataset.salary}'
      data-age= '${item.dataset.age}'>
    ${item.textContent}
    </li>`).join('')}
  </ul>
`;
