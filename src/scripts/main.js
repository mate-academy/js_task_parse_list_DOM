'use strict';

// write code here

const listEmploees = document.querySelector('ul');

function sortList(list) {
  const array = [...list.children];

  array.sort((a, b) => {
    const text1 = a.dataset.salary.trim();
    const text2 = b.dataset.salary.trim();

    let s1 = '';
    let s2 = '';

    for (let i = 0; i < text1.length; i++) {
      if (text1[i] !== ',' && text1[i] !== ' ' && text1[i] !== '$') {
        s1 += text1[i];
      }
    }

    for (let i = 0; i < text2.length; i++) {
      if (text2[i] !== ',' && text2[i] !== ' ' && text1[i] !== '$') {
        s2 += text2[i];
      }
    }

    const n1 = !isNaN(Number(s1)) ? Number(s1) : 0;
    const n2 = !isNaN(Number(s2)) ? Number(s2) : 0;

    return n2 - n1;
  });

  array.forEach((el) => list.appendChild(el));
}

function getEmployees(list) {
  let resultArr = [];
  const array = [...list.children];

  array.forEach((el) => {
    const person = {};

    person.name = el.firstChild.textContent.trim();
    person.position = el.dataset.position;

    const text = el.dataset.salary.trim();
    let s = '';

    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ',' && text[i] !== ' ' && text[i] !== '$') {
        s += text[i];
      }
    }

    const n = !isNaN(Number(s)) ? Number(s) : 0;

    person.selary = n;

    person.age = !isNaN(Number(el.dataset.age.trim()))
      ? Number(el.dataset.age.trim())
      : null;

    resultArr = [...resultArr, person];
  });

  return resultArr;
}

sortList(listEmploees);
getEmployees(listEmploees);
