import './ExpenseDate.css'


function ExpenseDate({date}) {
    return (
        <div className='expense-date'>
                <div className="expense-item__month">{date[1]}</div>
                <div className="expense-item__year">{date[2]}</div>
                <div className="expense-item__day">{date[0]}</div>
    </div>
    )
}

export default ExpenseDate