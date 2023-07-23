import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext)

    let amounts = transactions.map(transaction => transaction.amount)

    let total = amounts.reduce((x, y) => (x += y), 0).toFixed(2)

  return (
    <div>
        <h4>Your Balance</h4>
        <h1 id="balance">${total}</h1>
    </div>
  )
}

export default Balance