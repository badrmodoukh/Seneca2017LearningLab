// [INFO] See discussion of node.js exports here:
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 */
exports.isValidEmail = function isValidEmail(email) {
  // check if email is of type string
  if (typeof email === 'string') {
    // check if email length is greater than 0
    if (email.length > 0) {
      // check if email does not contain spaces/tabs
      if (!/\s/.test(email)) {
        if (email.includes('@myseneca.ca') || email.includes('@senecacollege.ca') || email.includes('@senecac.on.ca')) {
          return true;
        }
      }
    }
  }
  return false;
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = function formatSenecaEmail(name) {
  if (typeof name === 'string') {
    if (name.length > 0) {
      const str = name.trim();
      return str.concat('@myseneca.ca');
    }
  }
  return 'Invalid';
};
