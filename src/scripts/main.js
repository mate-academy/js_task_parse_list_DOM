'use strict';

const acceesToAllLiElement = [ ...document.querySelectorAll('li') ];
const accessToList = document.querySelector('ul');

let datA = acceesToAllLiElement.map((x, i) => {
  x.dataset.name = acceesToAllLiElement[i].textContent.trim();

  return x.dataset;
});

const convertSalary = (str) => +(str.slice(1, str.length).split(',').join(''));

datA = (datA.sort((a, b) => convertSalary(b.salary) - convertSalary(a.salary)));

accessToList.innerHTML = (datA).map(x =>
  `<li>
    ${x.name}
  </li>`).join('');
