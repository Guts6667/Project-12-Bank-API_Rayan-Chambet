import React, { useEffect } from "react";
import { useState } from "react";
import "./Acccounts.scss"


const Accounts = () => {
    const [accounts, setAccounts] = useState([]);
    const [displayInfos, setDisplayInfos ] = useState(false)
    const handleDisplayTransactions = (e) => {
        let targetId = e.target.parentElement.attributes.itemId;
        console.log(targetId);
        let transactionBoxes = document.querySelectorAll(".box__transaction");
        console.log(transactionBoxes);
        setDisplayInfos(!displayInfos)

    }
useEffect(() => {
    
    fetch("/data/assets.json")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      setAccounts(res)
    })
}, [])
    return(
        <div className="container__bankAccounts">
        {accounts && 
            accounts.map((account) => {
                return (
                    <div className="container__account">
                        <article itemId={account.id} key={`${account.id}-${account.type}`} className="box__account">
                        <div className="box__account-infos">
                            <span>{`Argent Bank ${account.type} (x${account.id})`}</span>
                            <span>{`$${account.balance}`}</span>
                            <span>Available Balance</span>
                        </div>
                        <button onClick={handleDisplayTransactions}>View transactions</button>
                        </article>

                        {
                            
                            account.transactions.map((transaction)=> {
                                return(
                                     displayInfos && (
                                        <article itemId={account.id} key={`${transaction.number}-${account.id}`} className="box__transaction">
                                        <div className="box__transaction-left">
                                            <span>{transaction.type === "debit"? `-${transaction.amount}$` : `+${transaction.amount}$` }</span>
                                            <span>{transaction.establishment}</span>
                                        </div>
                                        <div className="box__transaction-right">
                                            <span>{transaction.date}</span>
                                            <span>{`N°:${transaction.number}`}</span>
                                        </div>
                                    </article>
                                    )
                                )
                            })
                        }
                        </div> 
                )
            })
        }
        </div>
    )
}

export default Accounts;