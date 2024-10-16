/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */
const shims = require('./registry');
const auto = require('train-travel-friction-analysis-demo/_shims/auto/runtime');
if (!shims.kind) shims.setShims(auto.getRuntime(), { auto: true });
for (const property of Object.keys(shims)) {
  Object.defineProperty(exports, property, {
    get() {
      return shims[property];
    },
  });
}
