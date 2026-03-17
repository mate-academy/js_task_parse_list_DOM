'use strict';

const list = document.querySelector('ul');

const formatToSum = (node) => {
  if (!node || typeof node !== 'string') {
    return NaN;
  }

  return Number(node.replace(/[^\d.]/g, ''));
};

const sortList = (ul) => {
  const listItems = [...ul.children];

  listItems.sort((person1, person2) => {
    const salary1 = person1.dataset.salary;
    const salary2 = person2.dataset.salary;

    return formatToSum(salary2) - formatToSum(salary1);
  });

  listItems.forEach((item) => list.append(item));
};

const getEmployees = (ul) => {
  const listItems = [...ul.children];

  return listItems.map((person) => {
    return {
      name: person.textContent,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });
};

sortList(list);

const employees = getEmployees(list);
