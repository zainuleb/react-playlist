import "./ExpenseItem.css";

function ExpenseItem(props)
{
    console.log(props.date)
    // const d = new Date('2010-08-05')
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <>
            <div className="expense-item">
                <div>
                    <div>{month}</div>
                    <div>{day}</div>
                    <div>{year}</div>
                </div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div>
                    <h2 className='expense-item__price'>{props.amount}</h2>
                </div>
            </div>

        </>
    )
}

export default ExpenseItem;