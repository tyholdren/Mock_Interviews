// This is a JavaScript coding problem from BFE.dev
// https://bigfrontend.dev/problem/implement-curry

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function checkLength(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    return function (...missingArgs) {
      return checkLength.apply(this, [...args, ...missingArgs]);
    };
  };
}
