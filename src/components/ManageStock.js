import React, { useState } from 'react';
import RestockForm from './forms/RestockForm';
import StockoutForm from './forms/StockoutForm';

function ManageStock({ inventoryArray, inventorySetter, onAddnNewHistory }){

//usetstates
    //restock
    const [showRestockForm, setShowRestockForm] = useState(false);
    const [selectedRestock, setSelectedRestock] = useState(null);

    //stockout
    const [showStockoutForm, setShowStockoutForm] = useState(false);
    const [selectedStockout, setSelectedStockout] = useState(null);
    
//Closing forms
    const closeRestockForm = () =>{ //restock
        setShowRestockForm(false);
        setSelectedRestock(null);
    }
    
    const closeStockoutForm = () =>{ //stock out
        setShowStockoutForm(false);
        setSelectedStockout(null);
    }


//Open Forms
    const openRestockForm = (item) =>{ //restock
        setShowRestockForm(true);
        setSelectedRestock(item);

        closeStockoutForm()
    }

    const openStockOutForm = (item) =>{ //stock out
        setShowStockoutForm(true);
        setSelectedStockout(item);

        closeRestockForm();
    }

    //update the inventory
    const updateItem = (updatedItem) => {
        // Update the item in the inventoryArray2 (arrow function)
        const updatedInventory = inventoryArray.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        );
    
        // Update the inventory array
        inventorySetter(updatedInventory);
      };
    


    let listOfItems = inventoryArray.map((items) => (
      

        <>
        {/* key to keep track of the array? */}
        <div key={items.id}> 
          <tr>
            <td>
              <label>ID: {items.id}</label>
              <br />
              <label>Item Name: {items.itemName}</label>
              <br />
              <label>Item Description: {items.itemDescription}</label>
              <br />
              <label>Quantity: {items.itemQuantity}</label>
              <br/><br/>
            </td>
            <td>
                <button onClick={() => openRestockForm(items)}>Restock</button>
                <button onClick={() => openStockOutForm(items)}>Stock Out</button>
            </td>
          </tr>
          
        </div>
        </>
                  
                
      ));




    return (
        <>
          <h3>Edit Item Section</h3>
          <table>
            <tr>
              <th>
                Items
              </th>
              <th>
                Actions
              </th>
            </tr>
            
                {listOfItems}
  
          </table>
          

          {/* show form short hand ifelse handler */}
  
            {showRestockForm && (
                <RestockForm item={selectedRestock} onSaveChanges={updateItem} onClose={closeRestockForm} addHistory={onAddnNewHistory}/>
            )}

            {showStockoutForm && (
                <StockoutForm item={selectedStockout} onSaveChanges={updateItem} onClose={closeStockoutForm} addHistory={onAddnNewHistory}/>
            )}
        </>
      );
}


export default ManageStock;