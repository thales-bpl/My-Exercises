function division(x, y) {
  return x / y;
}

const assert = require('assert');

assert.strictEqual(division(10, 2), 5); // OK
assert.strictEqual(division(10, 0), 0); // 💣

// ---------- // ---------- // ---------- // ---------- //
// ---------- THROW ---------- //
// The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.

const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK