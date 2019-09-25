/**
 *
 * CLOSURES
 * Closure is created when specific function returns other function
 *
 * in console.dir you can see [[Scopes]]: Closure, Script, Global
 *
 */

function outerFn(mult) {
  const a = 10;

  function innerFn(b) {
    console.dir(innerFn); //
    return (a + b) * mult;
  }

  return innerFn;
}

const res1 = outerFn(2);
console.log(res1(20)); // 60

const res2 = outerFn(3);
console.log(res2(20)); // 90
