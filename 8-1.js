let expenses = [
  { expenses: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
  {
    expenses: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    expenses: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];
// функцию, содержащую расчет суммы затрат, данных в массиве - в расчет берутся суммы только выше 1000.

//1 часть
let total = 0;
for (let expense of expenses) {
for (let exp of expense.expenses) {
if (exp > 1000) total = total + exp
}
}
console.log(total);

//2 часть 
//вывести все значения массива через цикл и мeтод forEach

for (let expense of expenses) {
  expense.expenses.forEach(function(ex,index) 
  { 
    console.log(`затраты: ${ex}, индекс: ${index}`)
  })
};

// вывести только больше 1000 через цикл и метод filter 
for (let expense of expenses) {
  let exp1000 = expense.expenses.filter((ex) => {
    return ex > 1000
  })
  console.log(exp1000)
}

//
expenses.forEach(expenses => expenses.expenses.forEach(expense => console.log(expense))); 
