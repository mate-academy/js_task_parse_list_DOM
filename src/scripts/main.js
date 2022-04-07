'use strict';

const listEl = document.querySelector('ul');
const employerEls = listEl.children;
const employers = [...employerEls].map(el => ({
  name: el.innerText,
  position: el.dataset.position,
  salary: parseInt(el.dataset.salary.slice(1).split(',').join('')),
  age: parseInt(el.dataset.age),
}));

employers.sort(({ salary: salary1 }, { salary: salary2 }) => salary2 - salary1);

employers.forEach(emp => {
  const current = [...employerEls]
    .filter(el => el.innerText === emp.name)[0];

  listEl.insertAdjacentElement('beforeend', current);
});
