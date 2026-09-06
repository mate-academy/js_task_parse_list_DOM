'use strict';

const list = document.querySelector('ul');

function sortList(listElement) {
  const sortedList = Array.from(listElement.children).sort((a, b) => {
    const salaryA = Number((a.dataset.salary || '').replace(/,/g, ''));
    const salaryB = Number((b.dataset.salary || '').replace(/,/g, ''));

    return salaryB - salaryA;
  });

  sortedList.forEach((li) => {
    listElement.append(li);
  });
}

function getEmployees(listElement) {
  return Array.from(list.children).map((li) => {
    return {
      name: li.textContent.trim(),
      salary: Number((li.dataset.salary || '').replace(/,/g, '')),
    };
  });
}

sortList(list);

getEmployees(list);
