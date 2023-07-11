import { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import { v4 as uuidv4 } from 'uuid';

import { TextField, 
         Select, 
         Button, 
         InputLabel, 
         MenuItem, 
         FormControl } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

import './CustomForm.scss';

const CustomForm = ({setData, data}) => {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('expenses');
    const [date, setDate] = useState(dayjs(Date.now()))
    const [comment, setComment] = useState('');

    const selectType = (e) => {
        setType(e.target.value)
        if (e.target.value === 'expenses'){
            setAmount(amount * (-1))
        }
    }

    const pushToData = (e) => {
        e.preventDefault();
        const checkAmount = type === 'expenses'? amount*(-1) : amount;
        const guid = uuidv4();
        const newData = [...data, {guid, amount: checkAmount, type, comment, date}].sort((a,b) => Date.parse(b.date) - Date.parse(a.date));
        setData(newData);
        localStorage.setItem('records', JSON.stringify(newData))
        setAmount('');
        setType('expenses');
        setDate(dayjs(Date.now()));
        setComment('');
    }

    return (
        <>
            <form className="form" onSubmit={(e)=>pushToData(e)}>

                <div className="form_col">
                    <div className="amount">
                        <TextField fullWidth  type='number' inputProps={{ min: 1, step: 'any' }} value={amount} onChange={(e)=>setAmount(+e.target.value)} required id="amount" label="Amount" variant="outlined"/>
                    </div>

                    <div className="type">
                        <FormControl fullWidth variant="outlined">
                            <InputLabel required id="type-label">Transaction type</InputLabel>
                            <Select
                                value={type}
                                id="transaction-type"
                                label="Transaction type"
                                onChange={(e)=>selectType(e)}
                            >
                                <MenuItem value={'expenses'}> Expenses</MenuItem>
                                <MenuItem value={'income'}>Income</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="date">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker style={{width: '100%'}} onChange={(newValue) => setDate(newValue.toISOString())}
                                        value={date} 
                                        format='DD/MM/YYYY'
                                        slotProps={{ textField: { fullWidth: true } }}/>
                        </LocalizationProvider>
                    </div>
                </div>


                <div className="form_col">
                    <div className="comment">
                        <TextField
                            onChange={(e)=>setComment(e.target.value)}
                            value={comment}
                            id="comment"
                            label="Comment"
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                </div>

                <div className="break"></div>
                <div className="button">
                    <Button fullWidth type='submit' variant="contained">Add transaction</Button>
                </div>

            </form>
        </>
    )
}

export default CustomForm;