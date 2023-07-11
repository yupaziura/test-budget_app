import { useEffect, useState } from "react";

import './Summary.scss';

const Summary = ({data}) => {

    const [income, setIncome] = useState();
    const [expenses, setExpenses] = useState();
    const [balance, setBalance] = useState();


    const countPositive = () => {
        console.log(data.filter(item=>item.type==='income'))
        setIncome(data.filter(item=>item.type==='income').reduce((sum,b) => +sum + +b.amount, 0))
    }

    const countNegative = () => {
        setExpenses(data.filter(item=>item.type==='expenses').reduce((sum,b) => +sum + +b.amount, 0))
    }

    const countBalance = () => {
        setBalance(data.reduce((sum,b) => +sum + +b.amount, 0))
    }

    useEffect(()=> {
        countPositive();
        countNegative();
        countBalance();
    }, [data])

    return (
        <div className="sum">
            <h3 className="sum_header">Summary</h3>
            <div className="sum_wrapper">
                <div className="sum_pair">
                    <div className="sum_title">
                        Income summary
                    </div>
                    <div className="sum_value">
                        {income}
                    </div>
                </div>

                <div className="sum_pair">
                    <div className="sum_title">
                        Expenses summary
                    </div>
                    <div className="sum_value">
                        {expenses}
                    </div>
                </div>

                <div className="sum_pair">
                    <div className="sum_title">
                        Balance
                    </div>
                    <div className="sum_value">
                        {balance}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;