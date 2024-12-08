const removeFromArray = function () {
  args = [...arguments];
  let arr = args[0];
  let rest = args.slice(1);
  return arr.filter((item) => !rest.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
