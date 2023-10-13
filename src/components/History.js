

function History({historyArray}){
    let listOfItems = historyArray.map(items => 
        <>  
        <div className={items.class}>
            
            <h3>
                <label>Action: {items.itemAction}</label>
                <br/>
                <label>Amount: {items.itemQuantity}</label>
                <br/>
                <label>Supplier/Receiver: {items.itemPerson}</label>
            </h3>
            <br/>
            <label>Item ID: {items.id}</label>
            <br/>
            <label>Item Name: {items.itemName}</label>
            <br/>
            <label>Item Description: {items.itemDescription}</label>
        </div>
            <br/>
            <br/>
        </>)
    return(
        <div>
            <h3>These are the list of item History</h3>
            <div className="itemlist-container">
                {listOfItems}
            </div>
        </div>
    )
}

export default History;