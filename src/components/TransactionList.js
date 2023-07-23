import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)

    let dataList = transactions.map(transaction => ( <Transaction key={transaction.id} transaction={transaction}  /> ))


  return (
    <>
        <h3>History</h3>
        <ul id='list' className='list'>
            {dataList}
        </ul>
    </>
  )
}

export default TransactionList

