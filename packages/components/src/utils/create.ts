/*
 * @Author: liyafei
 * @Date: 2023-02-07 14:56:15
 * @Description: 
 */
export function createBEM(name: string) {
  return (el?: string): string => {
    return el ? `${name}-${el}` : name;
  };
}

export function createNamespace(name: string) {
  const prefixedName = `s-${name}`;
  return [
    prefixedName,
    createBEM(prefixedName),
  ] as const;
}