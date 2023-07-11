import { TextField, Select, Button, InputLabel, MenuItem, FormControl } from "@mui/material";

const CustomForm = () => {
    return (
        <>
            <form action="">

                <div className="amount">
                    <TextField required id="amount" label="Amount" variant="standard" />
                </div>

                <div className="type">
                    <FormControl variant="standard" >
                        <InputLabel required id="type-label">Transaction type</InputLabel>
                        <Select
                        id="transaction-type"
                        label="Transaction type"
                        >
                            <MenuItem value={'expenses'}>
                                <em>Expenses</em>
                            </MenuItem>
                            <MenuItem value={'income'}>Income</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="comment">
                    <TextField
                        id="comment"
                        label="Comment"
                        multiline
                        rows={4}
                        // defaultValue="Default Value"
                        variant="standard"
                    />
                </div>

                <Button type='submit' variant="outlined">Add transaction</Button>

            </form>
        </>
    )
}

export default CustomForm;