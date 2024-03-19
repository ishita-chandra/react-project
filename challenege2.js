{
    var transactions_1 = [];
    var balance = document.getElementById("balance");
    var addTransaction = function () {
        var description = document.getElementById("description");
        var amount = document.getElementById("amount");
        var newTransaction = {
            description: description.value,
            amount: +amount.value,
            date: new Date()
        };
        transactions_1.push(newTransaction);
        console.log(transactions_1);
        updateDisplay_1();
    };
    var updateDisplay_1 = function () {
        var description = document.getElementById("description");
        var amount = document.getElementById("amount");
        var balance = document.getElementById("balance");
        var transactionsarea = document.getElementById("transaction");
        var list = transactions_1.map(function (transaction) {
            return ("<li>".concat(transaction.amount).concat(transaction.date).concat(transaction.description));
        });
        transactionsarea.innerHTML = "<ul>" + list.join('') + "</ul>";
        description.value = "";
        amount.value = "";
        balance.innerText = transactions_1.reduce(function (total, transaction) { return total + transaction.amount; }, 0).toString();
    };
}
