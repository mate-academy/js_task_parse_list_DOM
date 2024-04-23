'use strict';

// write code here

const listOfEmployees = document.querySelector('ul');

function getSalary(item) {
  const salaryText = item.dataset.salary;
  const salary = +salaryText.replaceAll('$', '').replaceAll(',', '');

  return salary;
}

function sortList(list) {
  const sortedItems = [...list.children].sort((listItem1, listItem2) => {
    const salary1 = getSalary(listItem1);
    const salary2 = getSalary(listItem2);

    return salary2 - salary1;
  });

  sortedItems.forEach((item) => {
    list.append(item);
  });
}

function getEmployees(list) {
  const employees = [...list.children].map((listItem) => {
    return {
      name: listItem.innerText,
      position: listItem.dataset.position,
      salary: getSalary(listItem),
      age: +listItem.dataset.age,
    };
  });

  return employees;
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
