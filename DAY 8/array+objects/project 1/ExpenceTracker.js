const expenses = [
     {
          id: 1,
          title: "Groceries",
          amount: 520,
          category: "Food",
          date: "2025-12-01"
     },
     {
          id: 2,
          title: "Uber Ride",
          amount: 230,
          category: "Travel",
          date: "2025-12-03"
     },
     {
          id: 3,
          title: "Netflix Subscription",
          amount: 499,
          category: "Entertainment",
          date: "2025-12-05"
     },
     {
          id: 4,
          title: "Coffee",
          amount: 150,
          category: "Food",
          date: "2025-12-06"
     }
];

expenses.forEach((value) => {
     console.log(`${value.title} - ${value.amount} (${value.category})`);
})

const total_spending = expenses.reduce((accu, value) => { return accu + value.amount }, 0);

console.log(total_spending);

const Foodexpense = expenses.filter((value) => {
     if (value.category === "Food") {
          return value.amount
     }
});
console.log(Foodexpense);

let nextID = expenses.length + 1;

function addExpense(title, amount, category) {
     const newExpense = {
          id: nextID++,
          title,
          amount,
          category,
          date: new Date().toISOString().split("T")[0]
     };

     expenses.push(newExpense);
}


addExpense("gaming", 4000, "gaming");
console.log(expenses);