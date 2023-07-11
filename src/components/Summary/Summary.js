import { useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';

import './Summary.scss';

const Summary = ({data}) => {

    const [income, setIncome] = useState();
    const [expenses, setExpenses] = useState();
    const [balance, setBalance] = useState();

    const optionsAmount = { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 
      };

    const theme = useTheme();

    const countPositive = () => {
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
        <div className="sum" style={{backgroundColor: balance>=0? theme.palette.primary.light : theme.palette.danger.main}}>
            <h3 className="sum_header">Summary</h3>
            {balance < 0?
                <p className="sum_descr">🫢 Oops!.. Looks like you have some debts</p>
                :
                <p className="sum_descr">🙃 Everything seems normal</p>
            }
            <hr style={{borderTop: '1px solid #3c3c3c', marginBottom:'20px'}}/>
            <div className="sum_wrapper">
                <div className="sum_pair">
                    <div className="sum_title">
                        Income summary
                    </div>
                    <div className="sum_value">
                        {income.toLocaleString("ua-UA", optionsAmount)}
                    </div>
                </div>

                <div className="sum_pair">
                    <div className="sum_title">
                        Expenses summary
                    </div>
                    <div className="sum_value">
                        {expenses.toLocaleString("ua-UA", optionsAmount)}
                    </div>
                </div>

                <div className="sum_pair">
                    <div className="sum_title">
                        Balance
                    </div>
                    <div className="sum_value">
                        {balance.toLocaleString("ua-UA", optionsAmount)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;