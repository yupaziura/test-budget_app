import CustomForm from "../../components/Form/CustomForm";

import './FormPage.scss';

const FormPage = ({setData, data}) => {
    return (
        <>
            <h3 className="form-page_header">✏️ Form</h3>
            <p className="form-page_text">Please, carefully fill this form to provide new transaction.</p>
            <CustomForm setData={setData} data={data}/>
        </>
    )
}

export default FormPage;