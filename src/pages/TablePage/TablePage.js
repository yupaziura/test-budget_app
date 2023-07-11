import CustomTable from '../../components/Table/CustomTable';

import './TablePage.scss';

const TablePage = ({data, setData}) => {
    return (
        <>
            <h3 className='table-page_header'>Table</h3>
            <CustomTable data={data} setData={setData}/>
        </>
    )
}

export default TablePage;