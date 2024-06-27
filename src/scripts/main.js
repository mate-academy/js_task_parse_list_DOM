'use strict';

const allStaff = document.getElementsByTagName('li');
const list = document.getElementsByTagName('ul')[0];

const sortedStaff = Array.from(allStaff).sort(
  (a, b) =>
    +b.getAttribute('data-salary').replaceAll(',', '').slice(1) -
    +a.getAttribute('data-salary').replaceAll(',', '').slice(1),
);

while (allStaff.length > 0) {
  list.removeChild(allStaff[0]);
}

sortedStaff.forEach((staff) => list.append(staff));
