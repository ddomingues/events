export function group(objects, by) {
  return objects.reduce((prev, next) => {
      let key = by(next);

      if (prev[key]) {
        prev[key].push(next)
      } else {
        prev[key] = [next];
      }

      return prev;
    },
    {}
  );
};
