/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  // ваш код...
  let lowrStr = str.toLowerCase();
  return lowrStr.includes("1xbet") || lowrStr.includes("xxx");
}
