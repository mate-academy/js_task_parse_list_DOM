'use strict';

const HTMLlist = document.querySelectorAll('li');

function sortList(list) {
  return [...list].sort((a, b) => (
    +b.dataset.salary
      .slice(1)
      .split(',')
      .join('')
        - +a.dataset.salary
          .slice(1)
          .split(',')
          .join(''))
  );
}

function getEmployees(list) {
  const employes = [];

  [...list].forEach((item) => employes.push({
    name: item.textContent.trim(),
    ...item.dataset,
  }));

  return employes;
}

sortList(HTMLlist);
getEmployees(HTMLlist);
