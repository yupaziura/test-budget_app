import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TableFooter from '@mui/material/TableFooter';

import './CustomTable.scss';


function formatDate(string){
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

const CustomTable = ({data, setData}) => {

    const deleteRecord = (guid) =>{
        setData(d => d.filter(item => guid !== item.guid))
    }
    const balance = data.reduce((sum,b) => +sum + +b.amount, 0);

    return (
        <>
        <div className="table">
            {
                data.length === 0?
                <p className='table_empty'>No records yet</p>
                :
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Comment</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, i) => (
                            <TableRow key={row.guid} style={{backgroundColor: row.type==='expenses'? '#e2c2c1' : null}}>
                                <TableCell align="right">{row.amount}</TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">{formatDate(row.date)}</TableCell>
                                <TableCell align="right">{row.comment}</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="delete">
                                        <DeleteIcon onClick={()=>deleteRecord(row.guid)} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell align="right"><p style={{color: balance< 0? '#784042' : 'black', fontWeight:'bold', fontSize:'15px'}}>{balance}</p></TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            }
        </div>
        </>
    )
}

export default CustomTable;