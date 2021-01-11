'use strict';

const listEmployees = document.querySelector('ul');

function stringToNumber(string) {
  return +string.replace(/,/g, '').slice(1);
}

function sortList(list) {
  const listItems = list.children;
  const sortedItemsAlphabet = [ ...listItems ].sort((a, b) =>
    b.textContent.localeCompare(a.textContent));

  sortedItemsAlphabet.sort((a, b) =>
    stringToNumber(a.dataset.salary) - stringToNumber(b.dataset.salary));

  for (const li of sortedItemsAlphabet) {
    list.prepend(li);
  }
};

sortList(listEmployees);

function getEmployees(list) {
  const listItems = list.children;
  const result = [];

  for (const li of listItems) {
    result.push({
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    });
  }

  return result;
}

getEmployees(listEmployees);
