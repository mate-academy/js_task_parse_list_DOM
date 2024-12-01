'use strict';

const getSalary = (item) => {
  const salaryStr = item.getAttribute('data-salary').replace(/[,$]/g, '');

  return parseFloat(salaryStr);
};

const sortList = (listElement, order = 'desc') => {
  const items = Array.from(listElement.children);

  items.sort((a, b) => {
    const salaryA = getSalary(a);
    const salaryB = getSalary(b);

    return order === 'desc' ? salaryB - salaryA : salaryA - salaryB;
  });

  listElement.innerHTML = '';
  items.forEach((item) => listElement.appendChild(item));
};

const getEmployeesData = (listElement) => {
  const items = Array.from(listElement.children);

  return items.map((item) => {
    const employeeName = item.textContent.trim();
    const position = item.getAttribute('data-position');
    const salary = parseFloat(
      item.getAttribute('data-salary').replace(/[,$]/g, ''),
    );
    const age = parseInt(item.getAttribute('data-age'), 10);

    return {
      employeeName,
      position,
      salary,
      age,
    };
  });
};

const list = document.querySelector('ul');

sortList(list, 'desc');

getEmployeesData(list);
