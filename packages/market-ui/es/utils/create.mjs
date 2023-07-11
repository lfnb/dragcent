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
export {
  createBEM,
  createNamespace
};
