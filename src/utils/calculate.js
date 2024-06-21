import { evaluate } from 'mathjs';

export const calculate = (expression) => {
  try {
    return evaluate(expression);
  } catch (e) {
    return 'Error';
  }
};
