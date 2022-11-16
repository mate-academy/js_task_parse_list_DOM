'use strict';

function sortList() {
  const li = document.querySelectorAll('li');

  const liSetInArray = [...li]
    .sort((a, b) =>
      Number(b.dataset.salary
        .split(',')
        .join('')
        .slice(1))
   - Number(a.dataset.salary
     .split(',')
     .join('')
     .slice(1)));

  const getEmployees = () => {
    const root = document.getElementById('root');

    const list = document.createElement('ul');

    root.append(list);

    for (const items of liSetInArray) {
      const l = document.createElement('li');

      l.textContent = items.innerText;

      list.append(l);
    }

    const removeUl = document.querySelector('ul');

    removeUl.remove();
  };

  return getEmployees();
}

sortList();
