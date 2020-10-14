'use strict';

const liList = document.querySelectorAll('li');
const convertLiList = [...liList]
  .map(li => ({
    salary: +li.dataset.salary.replace(/(\$)|(,)/g, ''),
    position: li.dataset.position,
    age: li.dataset.age,
    name: li.textContent,
  }))
  .sort((previousValue, nextValue) => nextValue.salary - previousValue.salary);

for (let i = 0; i < liList.length; i++) {
  liList[i].dataset.position = convertLiList[i].position;
  liList[i].dataset.age = convertLiList[i].age;
  liList[i].dataset.salary = '$' + convertLiList[i].salary.toString();
  liList[i].textContent = convertLiList[i].name;
}
