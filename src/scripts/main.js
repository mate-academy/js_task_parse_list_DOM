'use strict';

const data = [...document.getElementsByTagName('li')].map(tag => {
  return {
    position: tag.getAttribute('data-position'),
    salary: +tag.getAttribute('data-salary').slice(1).replaceAll(',', ''),
    age: tag.getAttribute('data-age'),
    name: tag.innerText,
  };
});

const sortList = (arr) => {
  arr.sort((a, b) => b.salary - a.salary);
};

const getEmployees = (model) => {
  return model.map(entry => entry.name);
};

sortList(data);
getEmployees(data);

const root = document.getElementsByTagName('ul')[0];

root.innerHTML = data.map((el, idx) => {
  return `<li
  data-position=${el.position}
  data-salary=$${el.salary.toLocaleString()}
  data-age=${el.age}>
  ${el.name}
</li>`;
}).join('');
