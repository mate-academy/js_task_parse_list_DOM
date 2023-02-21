'use strict';

const workers = Array.from(
  document.getElementsByTagName('li')
);
const listWorker = document.querySelector('ul');
const solaries = [];

workers.forEach(element => {
  solaries.push(formatItem(element));
});

function formatItem(item) {
  return Number(item.dataset.salary.match(/\d+/g).join(''));
}

solaries.sort((a, b) => b - a).forEach(salary => {
  workers.forEach(element => {
    if (formatItem(element) === salary) {
      listWorker.append(element);
    };
  });
});
