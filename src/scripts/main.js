'use strict';

const queryList = document.querySelector('ul').children;

const getEmployees = function(list) {
  const arrayList = [...list].map(item => {
    const itemEmployee = {
      name: item.innerHTML.trim(),
      ...item.dataset,
    };

    return itemEmployee;
  });

  return arrayList;
};

const listForSort = getEmployees(queryList);

listForSort.forEach(item => {
  const aSort = item.salary.slice(1, 10).split(',');

  item.salary = Number(aSort.join(''));
});

const sortList = function(list) {
  list.sort(function(a, b) {
    if (a.salary > b.salary) {
      return -1;
    }

    if (a.salary < b.salary) {
      return 1;
    }

    return 0;
  });

  return list;
};

sortList(listForSort);

const thisList = document.querySelector('ul');

for (let i = 0; i < listForSort.length; i++) {
  const x = document.querySelector('li');

  x.remove();
}

for (let i = 0; i < listForSort.length; i++) {
  const item = document.createElement('li');

  item.innerHTML = listForSort[i].name;
  item.setAttribute('data-position', listForSort[i].position);
  item.setAttribute('data-salary', listForSort[i].salary);
  item.setAttribute('data-age', listForSort[i].age);

  thisList.append(item);
}
