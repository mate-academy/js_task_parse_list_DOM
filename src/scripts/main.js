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
  return Array.from(listElement.children).map((li) => {
    return {
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: Number((li.dataset.salary || '').replace(/[$,]/g, '')),
      age: Number(li.dataset.age),
    };
  });
}

sortList(list);
getEmployees(list);
