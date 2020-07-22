 // DECLARING FUNCTION 
 function spanUpdate(id, depositValue){
    let currentDeposit = document.getElementById(id).innerText;
    let currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositValue + currentDepositNumber;
    document.getElementById(id).innerText = totalDeposit;
}



// HIDE LOGIN SECTION AND SHOW BANKING SECTION 
let loginButton = document.getElementById("btn-login");
loginButton.addEventListener("click", function () {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("e-bank").style.display = "block";
})

// MONEY AMOUNT CALCULATION (DEPOSIT)
document.getElementById("depositButton").addEventListener("click", function () {
    let depositAmount = document.getElementById("depositAmount").value;
    let depositValue = parseFloat(depositAmount);

    // GET DEPOSIT NUMBER 
    // let currentDeposit = document.getElementById("currentDeposit").innerText;
    // let currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositValue + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;
    spanUpdate("currentDeposit" , depositValue); 

    // CLEAR VALUE 
    document.getElementById("depositAmount").value = "";

    // SET TOTAL AMOUNT 
    // let total = document.getElementById("currentBalance").innerText;
    // let totalNumber = parseFloat(total);
    // let totalAmountNumber = totalNumber + depositValue;
    // document.getElementById("currentBalance").innerText = totalAmountNumber;
    spanUpdate("currentBalance" , depositValue);
})


// MONEY AMOUNT CALCULATION (WITHDRAW) 
document.getElementById("withdrawButton").addEventListener("click", function () {
    // SET UP BUTTON 
    let withdrawAmount = document.getElementById("withdrawAmount").value;
    let withdrawValue = parseFloat(withdrawAmount);

    // GET WITHDRAW NUMBER 
    // let currentWithdraw = document.getElementById("currentWithdraw").innerText;
    // let currentWithdrawNumber = parseFloat(currentWithdraw);
    // let totalWithdraw = withdrawValue + currentWithdrawNumber;
    spanUpdate("currentWithdraw" , withdrawValue);

    // CLEAR VALUE
    document.getElementById("withdrawAmount").value = "";

    // SET TOTAL AMOUNT 
    // let totalWithdrawAmount = document.getElementById("currentBalance").innerText;
    // let totalWithdrawNumber = parseFloat(totalWithdraw);
    // let finalWithdrawTotal = -1 * (totalWithdrawNumber + withdrawValue);
    // document.getElementById("currentBalance").innerText = finalWithdrawTotal;
    spanUpdate("currentBalance" , -1 * withdrawValue);
})

