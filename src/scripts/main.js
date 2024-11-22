'use strict';

const sortList = (list) => {
  [...list].map((li) => {
    const salary = li
      .getAttribute('data-salary')
      .slice(1, -1)
      .replace(',', '.');

    li.setAttribute('salary', salary);
  });

  const sorted = [...list].sort((a, b) => {
    const salaryA = a.getAttribute('salary');
    const salaryB = b.getAttribute('salary');

    return salaryB - salaryA;
  });

  const parentEl = list[0].parentElement;

  sorted.forEach((li) => parentEl.append(li));
};

const getEmployees = (list) => {
  return [...list].reduce((result, el, i) => {
    const position = el.getAttribute('data-position');
    const salary = el.getAttribute('data-salary');
    const age = el.getAttribute('data-age');
    const nameEmpl = el.textContent.trim();

    const obj = {
      name: nameEmpl,
      position,
      salary,
      age,
    };

    return [...result, obj];
  }, []);
};

const listEl = document.querySelectorAll('li');

sortList(listEl);

getEmployees(listEl);
