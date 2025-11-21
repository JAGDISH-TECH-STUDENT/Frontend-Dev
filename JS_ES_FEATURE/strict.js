
function demo(a1, a2) {
  let total = 10;         // proper declaration
  const obj = { total };
  delete obj.total;       // allowed (deleting a property)
  return { a1, a2, total, obj };
}
console.log(demo(5, 10));
