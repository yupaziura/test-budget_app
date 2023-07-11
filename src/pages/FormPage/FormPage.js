import CustomForm from "../../components/Form/CustomForm"

const FormPage = ({setData, data}) => {
    return (
        <>
            <h4>Form</h4>
            <CustomForm setData={setData} data={data}/>
        </>
    )
}

export default FormPage;