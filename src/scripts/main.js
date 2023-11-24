'use strict';

// getting all data from list
const data = document.querySelectorAll('li');
const dataArr = [];

// getting name and salary to data array
for (const el of data) {
  // converting salary to understandable as number form
  const salary = el.getAttribute('data-salary').split(',').join('').slice(1);

  // getting name
  const PersonName = el.textContent.trim();

  // adding data to array as object for each person
  dataArr.push({
    name: PersonName, salary: salary,
  });
}

// creating new array, sorted descending by salary
const sortedDataArr = dataArr.sort((el, el2) => el2.salary - el.salary);

// replaecing list with sorted version
data.forEach((el, i) => {
  el.textContent = sortedDataArr[i].name;
});
