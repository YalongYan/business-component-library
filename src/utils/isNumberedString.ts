/**
 * 判定输入元素是否为可转换为数值类型
 */

export const isNumberedString = (value: unknown): boolean => {
  if (typeof value === 'number') {
    return Number.isNaN(value) === false && Number.isFinite(value) === true;
  }
  if (typeof value === 'string') {
    return Number.isNaN(+value) === false && Number.isFinite(+value) === true;
  }

  return false;
};
