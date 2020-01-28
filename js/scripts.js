//Bank Functionality
function Bank(){
    this.accounts = [],
    this.currentId = 0
}

Bank.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

Bank.prototype.addAccount = function(account) {
    account.id = this.assignId();
    this.accounts.push(account);
}

//Customer Functionality
function Customer(name, amount) {
    this.name = name,
    this.amount = amount
}

//User Interface
var Bank = new Bank();

function newCustomer (){};
function displayAmount(){};
function findAccount(){};
function deposit(){};
function withdrawl(){};


$(document).ready(function(){
    $("#register").submit(function(event){
    event.preventDefault();
     var amountDeposit = parseInt($("input#initialamount").val());
     var name = $("input#newName").val();
     console.log(amountDeposit);
     console.log(name);
    });
    $("#current").submit(function(event){
        event.preventDefault();
        var deposit = parseInt($("input#amount").val());
        var accountNumber = parseInt($("input#enterAccount").val());
    })
    $("#current").submit(function(event){
        event.preventDefault();
        var withdrawl = parseInt($("input#amount").val());
        var accountNumber = parseInt($("input#enterAccount").val());
    })
})