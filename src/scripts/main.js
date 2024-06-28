'use strict';

function sortList(ul) {
  const newUl = ul.cloneNode(false);
  const arr = [];

  ul.childNodes.forEach((child) => {
    if (child.nodeName === 'LI') {
      arr.push(child);
    }
  });

  arr.sort((a, b) => {
    const aSal = parseInt(
      a.dataset.salary.replaceAll(',', '').replaceAll('$', ''),
    );
    const bSal = parseInt(
      b.dataset.salary.replaceAll(',', '').replaceAll('$', ''),
    );

    return bSal - aSal;
  });

  arr.forEach((ch) => {
    newUl.appendChild(ch);
  });

  ul.parentNode.replaceChild(newUl, ul);
}

function getEmployees(ul) {
  const arr = [];

  ul.childNodes.forEach((child) => {
    if (child.nodeName === 'LI') {
      arr.push({ ...child.dataset, name: child.innerText });
    }
  });

  return arr;
}

sortList(document.querySelector('ul'));
getEmployees(document.querySelector('ul'));
