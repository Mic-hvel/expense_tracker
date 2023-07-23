import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [isText, setIsText] = useState('')
    const [isAmount, setIsAmount] = useState(0)
    const { addTransaction } = useContext(GlobalContext)


    function handleSubmit(e) {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100),
            isText,
            isAmount: parseInt(isAmount)
        }
    
        addTransaction(newTransaction)
    }

    function handleInputText(e) {
        setIsText(e.target.value)
    }

    function handleInputAmount(e) {
      setIsAmount(e.target.value)  
    }

  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
            <label htmlFor="text">Text</label>

            <input 
            onChange={handleInputText} value={isText}
            type="text" placeholder="Enter text..." 
            
            />
            </div>
            <div className="form-control">
            <label htmlFor="amount"
                >Amount <br />
                (negative - expense, positive - income)</label>
            <input 
            onChange={handleInputAmount} value={isAmount}
            type="number" placeholder="Enter amount..." 
            />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </>
  )
}

export default AddTransaction