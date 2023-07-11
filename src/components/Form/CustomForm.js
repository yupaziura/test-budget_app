import { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";

import { TextField, 
         Select, 
         Button, 
         InputLabel, 
         MenuItem, 
         FormControl } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const CustomForm = ({setData, data}) => {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('expenses');
    const [date, setDate] = useState(dayjs(Date.now()))
    const [comment, setComment] = useState('');

    const pushToData = (e) => {
        e.preventDefault();
        const newRec = {amount, type, comment, date};
        setData([...data, newRec]);
        setAmount('');
        setType('expenses');
        setDate(dayjs(Date.now()));
        setComment('');
    }

    // console.log(data)

    return (
        <>
            <form onSubmit={(e)=>pushToData(e)}>

                <div className="amount">
                    <TextField value={amount} onChange={(e)=>setAmount(+e.target.value)} required id="amount" label="Amount" variant="standard"/>
                </div>

                <div className="type">
                    <FormControl variant="standard">
                        <InputLabel required id="type-label">Transaction type</InputLabel>
                        <Select
                            value={type}
                            id="transaction-type"
                            label="Transaction type"
                            onChange={(e)=>setType(e.target.value)}
                        >
                            <MenuItem value={'expenses'}> Expenses</MenuItem>
                            <MenuItem value={'income'}>Income</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="date">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker onChange={(newValue) => setDate(newValue)}
                                value={date} 
                                format='DD/MM/YYYY'/>
                </LocalizationProvider>
                </div>

                <div className="comment">
                    <TextField
                        onChange={(e)=>setComment(e.target.value)}
                        value={comment}
                        id="comment"
                        label="Comment"
                        multiline
                        rows={4}
                        variant="standard"
                    />
                </div>

                <Button type='submit' variant="outlined">Add transaction</Button>

            </form>
        </>
    )
}

export default CustomForm;