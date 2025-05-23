'use strict';

const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

const sortList = () => {
  const sortedList = [...li].sort((a, b) => {
    const numA = +a.dataset.salary.replace('$', '').replace(',', '');
    const numB = +b.dataset.salary.replace('$', '').replace(',', '');

    return numB - numA;
  });

  return sortedList.forEach((item) => ul.appendChild(item));
};

sortList();
