
function makeMultiplier(multiplier) {
  return function(num) {
    return num * multiplier; // Closure: inner fn remembers 'multiplier'
  };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15
