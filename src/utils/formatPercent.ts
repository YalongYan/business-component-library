import { isNumber } from './isNumber';
import { isNumberedString }  from './isNumberedString';

export const formatPercent =  (input: string | number): string => {
  if (isNumber(input) === false && isNumberedString(input) === false) {
    throw new Error('ParamterError: formatPercent 传入参数错误');
  }
  return input !== 0 ? `${parseFloat((100 * +input).toPrecision(12)).toFixed(2)}%` : input + '';
};
