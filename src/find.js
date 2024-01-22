/** Function which returns either the first element of the inputArray which passes the test represented by the predicateFn or undefined
 * @param {array} inputArray
 * @param {function} predicateFn
 * @returns {any} first element of inputArray which passes the condition from the predicateFn
 */

function find(inputArray, predicateFn){
    for(let element of inputArray){
        if(predicateFn(element)){
            return element;
            
        }
    }
    return undefined;
}


function isNegative(n){
    return n < 0;

}
export { find };
