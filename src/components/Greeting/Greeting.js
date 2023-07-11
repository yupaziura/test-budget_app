import './Greeting.scss';

const Greeting = () => {
    return (
        <>
            <h3 className='greet_header'>Hello! This is an app, which allows you to controll all your spendings and incomes</h3>

            <p className='greet_text'>
                To start using Budget Tracker, fill the form. Provide all necessary information, such as transaction type, amount and comment (optionaly). Select Table tab to see all records provided before. Panel Summary, which is located aside, shows you total expenses, total income and balance.
            </p>
        </>
    )
}

export default Greeting;