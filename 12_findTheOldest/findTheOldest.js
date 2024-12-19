const findTheOldest = function (arr) {
  return arr.reduce((oldest, currentPerson) => {
    if (!currentPerson.yearOfDeath) {
      currentPerson.yearOfDeath = new Date().getFullYear();
    }
    if (!oldest.yearOfDeath) {
      oldest.yearOfDeath = new Date().getFullYear();
    }

    oldest =
      currentPerson.yearOfDeath - currentPerson.yearOfBirth >
      oldest.yearOfDeath - oldest.yearOfBirth
        ? currentPerson
        : oldest;
    console.log(oldest);
    return oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
