import CustomTable from '../../components/Table/CustomTable';

import './TablePage.scss';

const TablePage = ({data}) => {
    return (
        <>
            <h3 className='table-page_header'>Table</h3>
            <CustomTable data={data}/>
        </>
    )
}

export default TablePage;