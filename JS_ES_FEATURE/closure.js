function outer() {
  console.log(count); // undefined (var hoisted to undefined within outer)
  var count = 5;
  function inner() {
    console.log(count); // undefined (var hoisted to undefined within inner's scope)
    var count = 10;
  }
  inner();
}
outer();

// Output:

// undefined

// undefined Because each function has its own var count hoisted to undefined before assignment; inner’s count shadows outer’s.

// Hoisting creates separate memory contexts
// outer() has its own environment where count exists as undefined until assignment to 5.

// inner() has a separate environment; its var count is hoisted and masks outer’s count, so the log happens before assignment to 10, yielding undefined.
// Arrow function variant and behavior


function outer() {
  console.log(count); // undefined
  var count = 5;
  const inner = () => {
    console.log(count); // 5 (no inner re-declaration; arrow closes over outer's 'count')
  };
  inner();
}
outer();
