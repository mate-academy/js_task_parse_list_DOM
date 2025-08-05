'use strict';

// write code here
const workerElements = document.querySelector('ul');

function convertToNumber(string) {
  const numberStart = string.split('').findIndex((sym) => !Number.isNaN(+sym));

  return +string.trim().slice(numberStart).replaceAll(',', '');
}

function sortList(list) {
  const sorted = Array.from(list.children).sort(
    (a, b) =>
      -(convertToNumber(a.dataset.salary) - convertToNumber(b.dataset.salary)),
  );

  sorted.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  // There is no dataset.name value in index.html, I can't change index.html.
  // Therefore, i can only access it with item.innerText.
  return Array.from(list.children).map((item) => ({
    ...item.dataset,
    name: item.innerText,
  }));
}

sortList(workerElements);
getEmployees(workerElements);
