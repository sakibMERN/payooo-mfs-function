document.getElementById("btn-add-money").addEventListener("click", function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById("input-add-money");
    

    const pinNumber = getInputFieldValueById("input-pin-number");
    
    //validation pin and amount
    if(pinNumber === 1234 && !isNaN(addMoney) && addMoney > 0){
        const balance = getTextFieldValueById("account-balance");
        console.log(balance);

        const newBalance = balance + addMoney;

        document.getElementById("account-balance").innerText = newBalance;

        //add to transaction history
        const p = document.createElement("p");
        p.innerText = `Added: ${addMoney}tk. New Balance: ${newBalance}`;
        console.log(p);

        //should be a common function
        document.getElementById("transaction-container").appendChild(p);
    }
    else{
        alert("Some thing wrong! Please try again!");
    }
})