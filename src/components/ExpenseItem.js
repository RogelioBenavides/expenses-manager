import './ExpenseItem.css'

const ExpenseItem = () => {
    return (
        <div className='expense-item'>
            <div>March 28</div>
            <div className='expense-item-description'>
                <h2>Car Insurance</h2>
                <div className='expense-item-price'>$294.67</div>
            </div>
        </div>
    );
}

export default ExpenseItem;