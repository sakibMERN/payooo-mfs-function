document.getElementById("btn-cash-out").addEventListener("click", function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById("input-cash-out");
    console.log(cashOut);

    const pinNumber = getInputFieldValueById("input-cash-out-pin");
    console.log(pinNumber);

    const balance = getTextFieldValueById("account-balance");

    if(pinNumber === 1234 && !isNaN(cashOut) && cashOut < balance && cashOut > 0){
        const newBalance = balance - cashOut;

        document.getElementById("account-balance").innerText = newBalance;
        console.log(newBalance);

        //add transaction history
        const div = document.createElement("div");
        div.classList.add("bg-yellow-300");
        div.innerHTML = `
        <h4 class = "text-2xl font-bold">Cash Out</h4>
        <P>${cashOut}tk withdraw. New Balance ${newBalance}</P>
        `;
        document.getElementById("transaction-container").appendChild(div);
    }
    else{
        alert("Some thing wrong! Try Again.");
    }
})