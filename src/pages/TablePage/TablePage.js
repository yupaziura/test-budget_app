import CustomTable from '../../components/Table/CustomTable';

const TablePage = ({data}) => {
    return (
        <>
            <h4>Table</h4>
            <CustomTable data={data}/>
        </>
    )
}

export default TablePage;