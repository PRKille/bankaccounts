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

Bank.prototype.findAccount = function(id) {
    for (var i=0; i< this.accounts.length; i++) {
      if (this.accounts[i]) {
        if (this.accounts[i].id == id) {
          return this.accounts[i];
        }
      }
    };
    return false;
  }

//Customer Functionality
function Customer(name, amount) {
    this.name = name,
    this.amount = amount
}

Customer.prototype.deposit = function(deposit){
    this.amount += deposit;
    displayAmount(this);
};

Customer.prototype.withdrawl = function(withdrawl){
    this.amount -= withdrawl;
    displayAmount(this);
};

//User Interface
var Bank = new Bank();

function newCustomer (name, amount){
    var customer = new Customer (name, amount);
    Bank.addAccount(customer);
    return customer;
};

function displayAmount(id){
    $("#currentName").text(id.name);
    $("#currentAmount").text("$" + id.amount);
};

function clearForms(){
    $("input#newName").val("");
    $("input#initialamount").val("");
    $("input#enterAccount").val("");
    $("input#amount").val("");

}

// front end 
$(document).ready(function(){
    $("#register").submit(function(event){
    event.preventDefault();
     var amountDeposit = parseInt($("input#initialamount").val());
     var name = $("input#newName").val();
     var initialAccount = newCustomer(name, amountDeposit);
     displayAmount(initialAccount);
     clearForms();
    });
    $("#deposit").click(function(event){
        event.preventDefault();
        var deposit = parseInt($("input#amount").val());
        var accountNumber = parseInt($("input#enterAccount").val());
        var Customer = Bank.findAccount(accountNumber);
        Customer.deposit(deposit);
        clearForms();
    });
    $("#withdrawl").click(function(event){
        event.preventDefault();
        var withdrawl = parseInt($("input#amount").val());
        var accountNumber = parseInt($("input#enterAccount").val());
        var Customer = Bank.findAccount(accountNumber);
        Customer.withdrawl(withdrawl);
        clearForms();
    });
})