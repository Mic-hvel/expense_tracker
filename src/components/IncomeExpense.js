import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext)

    let amounts = transactions.map(transaction => transaction.amount)

    let income = amounts.filter(transaction => transaction > 0);
    let totalIncome = income.reduce((x, y) => (x += y), 0)

    let expense = amounts.filter(transaction => transaction < 0);
    let totalExpense = expense.reduce((x, y) => (x += y), 0) * -1



  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p id='money-plus' className='money plus'>${totalIncome}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p id='money-minus' className='money minus'>${totalExpense}</p>
        </div>
    </div>
  )
}

export default IncomeExpense