/**
 * 判定输入元素是否为number类型
 */

export const isNumber =  (value: unknown): value is number => {
  return (
    typeof value === 'number' &&
    Number.isNaN(value) === false &&
    Number.isFinite(value) === true
  );
};
