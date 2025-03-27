'use strict';

const employees = document.querySelectorAll('li');
const employessSort = sortList(employees);
const workers = getEmployees(employessSort);

function sortList(staff) {
  const workersArr = [...staff];

  return workersArr.sort(
    (worker1, worker2) =>
      +worker2.getAttribute('data-salary').replace(/[$ ,]/g, '') -
      +worker1.getAttribute('data-salary').replace(/[$ ,]/g, ''),
  );
}

function getEmployees(staff) {
  return [...staff].map((worker) => ({
    name1: worker.innerText,
    position: worker.getAttribute('data-position'),
    salary: worker.getAttribute('data-salary'),
    age: worker.getAttribute('data-age'),
  }));
}

workers.forEach((worker, i) => {
  Object.entries(worker).forEach(([key, value]) => {
    if (key === 'name1') {
      employees[i].innerText = value;
    } else {
      employees[i].setAttribute(`data-${key}`, value);
    }
  });
});
