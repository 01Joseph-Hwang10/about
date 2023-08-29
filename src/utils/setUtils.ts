export const intersection = <T>(setA: Set<T>, setB: Set<T>): Set<T> => {
  const _intersection = new Set<T>();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
};

export const union = <T>(setA: Set<T>, setB: Set<T>): Set<T> => {
  const _union = new Set<T>(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
};
