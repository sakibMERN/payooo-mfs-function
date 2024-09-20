/**
 * Common shared function here
 * 
 */
// console.log('utilities loaded');
// function getInputFieldValueById(){
//     const addMoney = document.getElementById("input-add-money").value;
//     return addMoney;
// }
// console.log("will get value by id");

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}