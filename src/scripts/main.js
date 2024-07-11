'use strict';

// write code here

const listaUl = document.querySelector('ul');
const listaLi = listaUl.querySelectorAll('li');

const posortowanaLista = [...listaLi].sort((a, b) => {
  const salaryA = Number(a.getAttribute('data-salary').replace(/[$,]/g, ''));
  const salaryB = Number(b.getAttribute('data-salary').replace(/[$,]/g, ''));

  return salaryB - salaryA;
});

posortowanaLista.forEach((li) => listaUl.appendChild(li));
