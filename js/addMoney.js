/**
 * How to get a number from an input field
 * 1.create a variable
 * 2. right side document.getElementById(id)
 * 3. .value
 * 4. parseFloat()
 */
console.log("add money loaded");
document.getElementById("btn-add-money").addEventListener("click",function(event){
    event.preventDefault();

    //Add money value receive from utilities
    // getInputFieldValueById();
    // const addMoney = getInputFieldValueById();
    // console.log("I get the value" ,addMoney);
    // const addMoney = document.getElementById("btn-add-money").value;
    // const addMoneyNumber = parseFloat(addMoney);

    const addMoney = getInputFieldValueById("input-add-money");
    console.log("The money is : ", addMoney);

    const inputPin = getInputFieldValueById("input-pin-number");
    console.log("The pin number is: ", inputPin);
})