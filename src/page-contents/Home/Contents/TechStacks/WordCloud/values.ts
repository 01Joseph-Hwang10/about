/**
 * @description Units in '%'.
 */
const wordTopRange = (): [number, number] => [10, 55];

/**
 * @description Units in 'px'.
 */
const wordLeftRange = (): [number, number] => [
  -document.body.offsetWidth / 2 + 100,
  document.body.offsetWidth / 2 - 100,
];

/**
 * @description Units in 'px'.
 */
const wordFontSize = (): [number, number] => [12, 25];

export default {
  wordTopRange,
  wordLeftRange,
  wordFontSize,
};
