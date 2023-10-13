


function ItemList({ inventoryArray }){

    
    let listOfItems = inventoryArray.map(items => 
        <>
        <div className="items-container">
            <label>ID: {items.id}</label>
            <br/>
            <label>Item Name: {items.itemName}</label>
            <br/>
            <label>Item Description: {items.itemDescription}</label>
            <br/>
            <label>Quantity: {items.itemQuantity}</label>
            <br/>
            <br/>
        </div>
        <br/>
            
        </>)
    return(
        <div>
            <h3>These are the list of item in the inventory</h3>
            <div className="itemlist-container">
                {listOfItems}
            </div>
        </div>
    )
    
}

export default ItemList;