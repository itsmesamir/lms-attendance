import * as camelCase from 'camelize';
import { snakeCase } from 'lodash';

/**
 * Make objects value into snake_case.
 *
 * @param {*} str
 * @returns {string}
 */
export function toSnakeCase(str: any) {
  // If the value contains a version string, do not convert it to snake case
  // For example, `skills_v2` should not be converted to `skills_v_2`
  if (str.match(/_[a-zA-Z]+\d+(_|$)/)) {
    return str;
  }

  return snakeCase(str);
}

/**
 * Make objects value into camelCase.
 *
 * @param {Object} obj
 * @returns {Object}
 */
export function toCamelCase(obj: any) {
  return camelCase(obj);
}
