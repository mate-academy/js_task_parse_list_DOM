'use strict';

const ul = document.querySelector('ul');
const sortedBySalaryEmployees = sortList(ul.children, 'salary');
const btn = document.querySelector('button');

function sortList(arr, sortingBy) {
  return [...arr].sort((a, b) => {
    const aa = a.dataset[sortingBy].slice(1).replace(/,/g, '');
    const bb = b.dataset[sortingBy].slice(1).replace(/,/g, '');

    return bb - aa;
  });
}

ul.innerHTML = `
  ${sortedBySalaryEmployees.map(el => (
    `<li
        data-position="${el.dataset['position']}"
        data-salary="${el.dataset['salary']}"
        data-age="${el.dataset['age']}"
      >
        ${el.innerText}
        <span id="hided" class="money hided">${el.dataset['salary']}</span>
      </li>`
  )).join(' ')}
`;

const hided = document.querySelectorAll('.money');

btn.addEventListener('click', () => {
  hided.forEach((el) => {
    el.classList.toggle('hided');
  });
});
