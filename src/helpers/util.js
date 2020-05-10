/**
 *Dashboard Utility class
 *
 * @class Util
 */
class Util {
  /**
   *Format a given string with provided key-value pairs
   *
   * @static
   * @param {String} [string=null] - String to be formatted
   * @param {Object} [keyValuePair=null] Object containing the target
   * terms as keys and replacements as values
   * @returns Formatted string
   * @memberof Util
   */
  static formatString(string = null, keyValuePair = {}) {
    // Check if string is empty
    if (!string || string.length === 0) {
      return new Error('Please provide a string to format');
    }

    // Check if key-value pairs are provided
    if (!keyValuePair || Object.keys(keyValuePair).length === 0) {
      return new Error('Please provide the key-value pairs for formatting');
    }

    // Find number of target occurences
    const occurences = string.match(/:[A-Za-z]/g || []).length;

    // Get the keys from the keyValuePair object
    const keys = Object.keys(keyValuePair);

    // Check if keys match the number of target occurences
    if (occurences !== keys.length) {
      return new Error('Missing values for certain keys. Please check.');
    }

    // Create new string to return
    let formattedString = string;

    // Replace all target keys with their corresponding values
    keys.forEach((keyItem) => {
      formattedString = formattedString.replace(new RegExp(`:${keyItem}`, 'g'), keyValuePair[keyItem]);
    });

    return formattedString;
  }

  /**
   * Set value in a nested objected
   * @function setDeep
   * @static
   * @param {object} obj - Source object
   * @param {array} path - Target path
   * @param {any} value - Value to be set
   * @returns - New/Updated object with the value set
   * @memberof Util
   */
  static setDeep(obj, path, value) {
    const newObj = Object.assign({}, obj);

    let level = 0;

    path.reduce((a, b) => {
      const newA = a;

      level += 1;

      if (level === path.length) {
        newA[b] = value;
        return newA[b];
      }
      return newA[b];
    }, newObj);

    return newObj;
  }

  /**
   * Get value in a nested object
   * @function getDeep
   * @static
   * @param {object} obj - Source object
   * @param {array} path - Target path
   * @returns Target value
   * @memberof Util
   */
  static getDeep(obj, path) {
    let target = Object.assign({}, obj);

    path.forEach((key) => {
      target = target[key];
    });

    return target;
  }

  /**
   * Get all values in a nested object
   *
   * @static
   * @param {object} object - Source object
   * @returns List of all values
   * @memberof Util
   */
  static getFlattenedValues(object) {
    const values = [];

    function fetchValue(obj) {
      Object.values(obj).forEach((objval) => {
        if (typeof objval === 'object' && objval !== null) {
          return fetchValue(objval);
        }
        return values.push(objval);
      });
    }

    fetchValue(object);

    return values;
  }

  /**
   * Create clone of source object by removing one property
   *
   * @static
   * @param {object} object - Source object
   * @param {string} key - Target property key
   * @returns Cloned object without property
   * @memberof Util
   */
  static omitProperty(object, key) {
    const result = Object.assign({}, object);
    delete result[key];

    return result;
  }

  /**
   * Get a unique list filtered by object property
   *
   * @static
   * @param {object} list - Source list
   * @param {object} prop - Target property to get unique list
   * @returns Unique list of objects by property
   * @memberof Util
   */
  static getUniqueListByProp(list, prop) {
    const result = [];
    let uniqueNames = [];

    list.forEach((item) => {
      if (!uniqueNames.includes(item[prop])) {
        result.push(item);
        uniqueNames = [...new Set([...uniqueNames, item[prop]])];
      }
    });

    return result;
  }

  /**
   * Check if all entries in an array is equal to specified value
   *
   * @static
   * @param {Array} arr - Input array
   * @param {any} val - Specified value for comparison
   * @returns Boolean value
   * @memberof Util
   */
  static arrayAllEquals(arr, val) {
    return !arr.map(curr => curr === val).includes(false);
  }

  /**
   * Check if all entries in an array of objects is equal to specified value
   *
   * @static
   * @param {Array} arr - Input array of objects
   * @param {any} val - Specified value for comparison
   * @returns Boolean value
   * @memberof Util
   */
  static objectAllEquals(arr, key, val) {
    return !arr.map(curr => curr[key] === val).includes(false);
  }

  /**
   * Convert list of objects to object with key taken from list
   *
   * @static
   * @param {*} list - List of objects
   * @param {*} key - Key from the object
   * @returns Object from list
   * @memberof Util
   */
  static convertToObj(list, key) {
    const obj = {};
    list.forEach((item) => {
      obj[item[key]] = item;
    });
    return obj;
  }
}

export default Util;
