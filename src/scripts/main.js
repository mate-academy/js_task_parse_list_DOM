'use strict';

const listNode = document.querySelectorAll('li');
const ulElement = document.querySelector('ul');

const list = [...listNode];

function dataSaleryToNumber(x) {
  return +x.dataset.salary.slice(1).split(',').join('');
}

function sortList(arr) {
  return arr.sort((a, b) => {
    const first = dataSaleryToNumber(a);
    const second = dataSaleryToNumber(b);

    return (second - first);
  });
}

const answer = sortList(list);

ulElement.innerHTML = '';

answer.forEach(element => {
  ulElement.innerHTML += `<li
  data-position=${element.dataset.position}
  data-salary=${element.dataset.salary}
  data-age=${element.dataset.age}
>
${element.innerHTML}
</li>`;
});
