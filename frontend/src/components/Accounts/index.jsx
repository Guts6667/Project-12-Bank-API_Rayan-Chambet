import React, { useEffect } from "react";
import { useState } from "react";
import "./Acccounts.scss"

/**
 * Component Accounts
 * @returns {JSX} React Component
 */
const Accounts = () => {
    const [accounts, setAccounts] = useState([]);

useEffect(() => {
    // Fetches accounts data from json file in public
    fetch("/data/assets.json")
    .then((res) => res.json())
    .then((res) => {
      setAccounts(res)
    })
}, [])
    return(
        <div className="container__bankAccounts">
        {accounts && 
            accounts.map((account) => {
                return (
                    <div className="container__account" key={`${account.id}-${account.type}`}>
                        <article   className="box__account">
                        <div className="box__account-infos">
                            <span>{`Argent Bank ${account.type} (x${account.id})`}</span>
                            <span className="box__account-balance">{`$${account.balance}`}</span>
                            <span>Available Balance</span>
                        </div>
                        <button >View transactions</button>
                        </article>
                        </div> 
                )
            })
        }
        </div>
    )
}

export default Accounts;