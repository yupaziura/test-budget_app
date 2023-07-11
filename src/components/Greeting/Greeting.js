import { Link } from 'react-router-dom';

import './Greeting.scss';

const Greeting = () => {
    return (
        <div className='greet'>
            <h3 className='greet_header'> 👋 Hello! This is an app, which allows you to controll all your spendings and incomes</h3>

            <p className='greet_text'>
                To start using Budget Tracker, fill the <Link className='greet_link' to='/form'>Form</Link>. Provide all necessary information, such as transaction type, amount, date and comment (optionaly).<br/><br/>  Select <Link to='/table' className='greet_link'>Table tab</Link> to see all records provided before.<br/> <br/> Panel Summary, which is located aside, shows you total expenses, total income and balance.<br/><br/>  Good luck! 🍀
            </p>
        </div>
    )
}

export default Greeting;