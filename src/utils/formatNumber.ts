import { isNumber } from './isNumber';
import { isNumberedString } from './isNumberedString';

export const formatNumber = (input: string | number): string => {
  if (isNumber(input) === false && isNumberedString(input) === false) {
    throw new Error('ParamterError: formatNumber 传入参数错误');
  }

  const isFloat = +input > Math.floor(+input);
  const number = Number(input);
  const fixedNumber = isFloat && number !== 0 ? number.toFixed(2) : number;

  return fixedNumber.toString().replace(/(\d)(?=(?:\d{3})+($|\.))/g, '$1,');
};
