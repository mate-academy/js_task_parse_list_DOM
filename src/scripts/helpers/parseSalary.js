'use strict';

/**
 * Convert salary string like "$123,456" into number
 * @param {string} salaryStr
 * @return {number}
 */
export function parseSalary(salaryStr) {
  if (!salaryStr) {
    return 0;
  }

  return Number(salaryStr.replace(/[$,]/g, ''));
}
