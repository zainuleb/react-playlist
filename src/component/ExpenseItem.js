import "./ExpenseItem.css";

function ExpenseItem()
{
    const expDate = "2021, 6, 25"
    const expTitle = 'Car Insurance'
    const expeAmount = 299
    return (
        <>
            <div className="expense-item">
                {expDate}
            </div>
            <div className='expense-item__description'>
                <h2>{expTitle}</h2>
                <div>
                    <h2 className='expense-item__price'>{expeAmount}</h2>
                </div>
            </div>

        </>
    )
}

export default ExpenseItem;