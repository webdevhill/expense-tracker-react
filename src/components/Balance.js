import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className='balance'>
        <h2>Current Balance</h2>
        <h3>${total}</h3>
      </div>
  )
}

export default Balance
