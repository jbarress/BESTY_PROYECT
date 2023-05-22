

function convertToNumber(str) {
    if (!str) {
      return null;
    }
    if (typeof str === "number") {
      return str;
    }
    if (typeof str === "string") {
      const trimmed = str.trim();
      const lastChar = trimmed.charAt(trimmed.length - 1);
  
      if (lastChar === "%") {
        return parseFloat(trimmed) / 100;
      }
  
      const words = {
        maximo: 1,
        minimo: 0
        poco: 0.25,
        algo: 0.5,
        bastante: 0.75,
        mucho: 1,
      };
      const wordValue = words[trimmed.toLowerCase()];
      if (wordValue !== undefined) {
        return wordValue;
      }
  
      const parsed = parseFloat(trimmed);
      if (!isNaN(parsed)) {
        return parsed;
      }
    }
    return null;
  }
  
  module.exports = convertToNumber;