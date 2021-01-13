// selectors
let updateBudgetButton = document.querySelector('#update_budget');
let addExpenseButton = document.querySelector('#add_expense');
let monthlyBudget = document.querySelector('#monthly_budget');
let incomeInput = document.querySelector('#income_input');
let remainingBalance = document.querySelector('#remaining_balance');
let amountInput = document.querySelector('#amount_input');
let nameInput = document.querySelector('#name_inoput');
let expenseList = document.querySelector('#expense_list');
let totalExpense = document.querySelector('#total_expenses');

// events
updateBudgetButton.onclick = updateBudget;
addExpenseButton.onclick = addExpense;

// variables
let monthlyIncome = 0;
let expense = [];
let expenseTotal = 0;
let balance = 0;

// functions
function updateBudget(event){
    event.preventDefault();
    monthlyIncome = incomeInput.value;
    monthlyBudget.innerText = "$" + monthlyIncome;
    updateBalance();
}

function updateBalance(){
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance;
    if (balance < 0) {
        remainingBalance.classList.add('red');
        remainingBalance.classList.remove('green');
    } else {
        remainingBalance.classList.add('green');
        remainingBalance.classList.remove('red');
    }
}

function addExpense(event) {
    event.preventDefault();
    let expense = {
        name: nameInput.value,
        amount: amountInput.value
    };
    let newExpense = document.createElement('p');
    newExpense.innerText = expense.name + ": $" + expense.amount;
    expenseList.appendChild(newExpense);
    expenseAmount = parseInt(amountInput.value);
    expenseList.push(expenseAmount);
    updateExpenseTotal();
}

function updateExpenseTotal() {
    expenseTotal = 0;
    for (let i = 0; i < expenseList.length; i++) {
      expenseTotal = expenseTotal + expense[i];  
    }
    totalExpense.innerText = "$" + expenseTotal;
    updateBalance();
    }