'use strict';

const allList = Array.from(document.querySelectorAll('li'));

const sortList = (list) => {
  list.sort((x1, x2) => {
    const salary1 = parseFloat(x1.salary.replace(/[$,]/g, ''));
    const salary2 = parseFloat(x2.salary.replace(/[$,]/g, ''));

    return salary2 - salary1;
  });

  return list;
};

function getEmployeeArr(list) {
  return list.map((item) => ({
    name: item.innerText,
    ...item.dataset,
  }));
}

const newList = getEmployeeArr(allList);

sortList(newList);

for (let i = 0; i < allList.length; i++) {
  allList[i].innerText = newList[i].name;
  allList[i].dataset.position = newList[i].position;
  allList[i].dataset.salary = newList[i].salary;
  allList[i].dataset.age = newList[i].age;
}
