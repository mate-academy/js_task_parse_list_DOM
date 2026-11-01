'use strict';

const list = document.querySelector('ul');

const getSalary = (salary) => +salary.replace(/[$,]/g, '');

const sortList = (listElem) => {
  const sortedListItems = [...listElem.querySelectorAll('li')].sort(
    (element1, element2) => {
      const salary2 = getSalary(element2.dataset.salary);
      const salary1 = getSalary(element1.dataset.salary);

      return salary2 - salary1;
    },
  );

  listElem.append(...sortedListItems);
};

const getEmployees = (listElem) =>
  [...listElem.querySelectorAll('li')].map((listItem) => {
    const { position, salary, age } = listItem.dataset;
    const employeeName = listItem.textContent.trim();

    return {
      name: employeeName,
      position,
      salary,
      age,
    };
  });

sortList(list);
getEmployees(list);
