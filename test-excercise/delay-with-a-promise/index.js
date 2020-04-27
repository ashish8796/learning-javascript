// Delay with a promise
// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it,

function delay(ms) {
  let promise = new Promise(resolve => setTimeout(resolve, ms))
  return promise
}

delay(3000).then((result) => console.log(`runs after ${result} seconds`));