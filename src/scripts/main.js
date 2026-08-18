'use strict';

function getEmployees(arr = []) {
  const elements = document.querySelectorAll('li');

  if (arr.length > 0) {
    elements.forEach((el, i) => {
      if (!arr[i]) {
        return;
      }

      el.textContent = arr[i].name;
      el.dataset.position = arr[i].position;
      el.dataset.salary = arr[i].salary;
      el.dataset.age = arr[i].age;
    });
  } else {
    return Array.from(elements, (el) => ({
      name: el.textContent.trim(),
      position: el.dataset.position || '',
      salary: el.dataset.salary || '',
      age: el.dataset.age || '',
    }));
  }
}

function sortList(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(sortList(left), sortList(right));
}

function merge(left, right) {
  const resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (
      Number(left[leftIndex].salary.replace(/\D/g, '')) >
      Number(right[rightIndex].salary.replace(/\D/g, ''))
    ) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

getEmployees(sortList(getEmployees()));
