// Callbacks, events, events queue, execution contexts stack, Web APIs

// CALLBACK is a function passed as argument in the call to other function
function waitingFn(timeInMs) {
  const futureTime = Date.now() + timeInMs;
  while (futureTime > Date.now()) {
    // waiting...
  }
}

// setTimeOut is one of the global methods ->
// setTimeOut is a propertu of the global Object Window
// window.setTimeOut
//setTimeOut requires 2 arguments -> callback function and timeout in ms

setTimeout(() => console.log("Callback is executed"), 0);

waitingFn(5000);

console.log("Last statement in the global execution context");
