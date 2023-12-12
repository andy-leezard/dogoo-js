/**     
 * This function modifies the original array and returns it.
 */
export function injectElementsAtPosition(resultArray:any[], position:number, element:any) {
    resultArray.splice(position, 0, element)
    return resultArray
}