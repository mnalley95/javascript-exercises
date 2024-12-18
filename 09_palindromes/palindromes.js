const palindromes = function (str) {
  processesd_str = str
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()/\s+]/g, "");
  rev = processesd_str.split("").reverse().join("");
  console.log(rev);
  return rev === processesd_str;
};

// Do not edit below this line
module.exports = palindromes;
