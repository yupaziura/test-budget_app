import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function formatDate(string){
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

const CustomTable = ({data}) => {
    console.log(data)
    return (
        <>
        <div className="table">
            {
                data.length === 0?
                <p>No records yet</p>
                :
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Comment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, i) => (
                            <TableRow key={i}>
                                <TableCell align="right">{row.amount}</TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">{formatDate(row.date)}</TableCell>
                                <TableCell align="right">{row.comment}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            }
        </div>
        </>
    )
}

export default CustomTable;