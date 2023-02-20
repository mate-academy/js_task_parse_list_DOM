'use strict';

const workerColection = Array.from(
  document.getElementsByTagName('li')
);
const listWorker = document.querySelector('ul');
const solaryArray = [];

workerColection.forEach(element => {
  solaryArray.push(formatItem(element));
});

function formatItem(item) {
  return Number(item.dataset.salary.match(/\d+/g).join(''));
}

solaryArray.sort((a, b) => b - a).map(salary => {
  workerColection.forEach(element => {
    if (formatItem(element) === salary) {
      listWorker.append(element);
    };
  });
});
