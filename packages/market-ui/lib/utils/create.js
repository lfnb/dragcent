"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function createBEM(name) {
  return (el) => {
    return el ? `${name}-${el}` : name;
  };
}
function createNamespace(name) {
  const prefixedName = `s-${name}`;
  return [
    prefixedName,
    createBEM(prefixedName)
  ];
}
exports.createBEM = createBEM;
exports.createNamespace = createNamespace;
