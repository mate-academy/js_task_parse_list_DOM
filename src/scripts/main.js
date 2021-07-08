'use strict';

const allLiElement = [ ...document.querySelectorAll('li') ];
const dateList = [];
const accessToUlTag = document.querySelector('ul');

allLiElement.map(item => (item.dataset.salary = Number(item.dataset.salary
  .slice(1, item.dataset.salary.length).split(',').join(''))));

allLiElement.map(item => (item.dataset['name'] = item.textContent)
  && (item.dataset.name = item.dataset.name.trim())
  && dateList.push(item.dataset));

const sortBySalary = (array) => array.sort((a, b,) => b.salary - a.salary);

accessToUlTag.innerHTML = sortBySalary(dateList).map(x =>
  `<li>
    ${x.name}
  </li>`).join('');
