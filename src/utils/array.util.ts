/**
 * Add an item, mutate the original array.
 */
export const arrayAddAt = <T>(arr: T[], at: number, item: T) => {
  arr.splice(at, 0, item);
};
/**
 * Add an item, return a new array.
 */
export const arrayToAddAt = <T>(arr: T[], at: number, item: T): T[] => {
  const arrInFn = [...arr];
  arrayAddAt(arrInFn, at, item);
  return arrInFn;
};
/**
 * Remove an item, mutate the original array.
 */
export const arrayRemoveAt = <T>(arr: T[], at: number) => {
  arr.splice(at, 1);
};
/**
 * Remove an item, return a new array.
 */
export const arrayToRemoveAt = <T>(arr: T[], at: number): T[] => {
  const arrInFn = [...arr];
  arrayRemoveAt(arrInFn, at);
  return arrInFn;
};
/**
 * Move an item to a new position, mutate the original array.
 */
export const arrayMove = <T>(arr: T[], from: number, to: number) => {
  const itemToMove = arr[from];
  arrayRemoveAt(arr, from);
  arrayAddAt(arr, to, itemToMove);
};
/**
 * Move an item to a new position, return a new array.
 */
export const arrayToMove = <T>(arr: T[], from: number, to: number): T[] => {
  const arrInFn = [...arr];
  arrayMove(arrInFn, from, to);
  return arrInFn;
};
