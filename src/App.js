
import * as math from './math.js';

function App() {
  
  
   const doAdd      = (a, b) => math.add(a, b);
   const doSubtract = (a, b) => math.subtract(a, b);
   const doMultiply = (a, b) => math.multiply(a, b);
   const doDivide   = (a, b) => math.divide(a, b);
  
  return (
    
    doAdd,
    doSubtract,
    doMultiply,
    doDivide

  );
}

export { App };
