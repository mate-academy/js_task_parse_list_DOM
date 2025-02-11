'use strict';

import { getEmployees } from '../helpers/functions/employeCreatorHelper.js';
import { sortList } from '../helpers/functions/sortHelper.js';

const employees = [
  ...document.querySelector('[data-position]').parentNode.childNodes,
];
const employe = getEmployees(employees);
const sortedEmploye = sortList(employe, 'salary');
console.table(sortedEmploye);
