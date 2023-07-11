import { useState } from "react";

import { TextField, 
         Select, 
         Button, 
         InputLabel, 
         MenuItem, 
         FormControl } from "@mui/material";

const CustomForm = ({setData, data}) => {
    const [amount, setAmount] = useState();
    const [type, setType] = useState('expenses');
    const [comment, setComment] = useState('');

    const pushToData = (e) => {
        e.preventDefault();
        const newRec = {amount, type, comment, date: Date.now()};
        setData([...data, newRec]);
        setAmount();
        setType('expenses');
        setComment('')
    }

    console.log(data)

    return (
        <>
            <form onSubmit={(e)=>pushToData(e)}>

                <div className="amount">
                    <TextField onChange={(e)=>setAmount(+e.target.value)} required id="amount" label="Amount" variant="standard" />
                </div>

                <div className="type">
                    <FormControl variant="standard" >
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

                <div className="comment">
                    <TextField
                        onChange={(e)=>setComment(e.target.value)}
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