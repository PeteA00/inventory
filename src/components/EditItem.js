import React, { useState } from 'react';
import EditForm from './forms/EditForm'; // need to import the edit form for changing the value of item.


import RestockForm from './forms/RestockForm';
import StockoutForm from './forms/StockoutForm';



function EditItem({ inventoryArray2, inventorySetter, historyArray, historySetter}) { // pass the whole array and the arraysetter(which is the usestate from) from top level code



  //Add to history array
  function addHistoryClick(itemID,name, description, action, quantity, person, className){

    let newHistory = { id:itemID, itemName: name, itemDescription : description, itemAction: action, itemQuantity : quantity, itemPerson : person, class:className };

    historySetter([...historyArray, newHistory]);

  }



    function deleteItemClick(id) { //this function will delete item based on the id
      console.log("Item deleted id: " + id);
      closeEditForm();
      closeRestockForm();
      closeStockoutForm();
      alert("Item with ID: " + id +" deleted")
  
      // Implement logic to delete the item by its ID
      //Create list named "updateInventory" where it containt all the array data except for the passed id item.
      const updatedInventory = inventoryArray2.filter((item) => item.id !== id);
  
      // Update the inventory by calling the setter function
      //will also affect the top level array from app.js
      inventorySetter(updatedInventory);
    }
  
    //Section for edit button
    //initialize the show form as false to hide it
    const [showEditForm, setShowEditForm] = useState(false);

    //initialize the selected item as null if the coresponding edit button is not pressed
    const [selectedItem, setSelectedItem] = useState(null);
  
    const openEditForm = (item) => {
      setSelectedItem(item);
      setShowEditForm(true);

      closeRestockForm();
      closeStockoutForm();
    };
  
    const closeEditForm = () => {
      setSelectedItem(null);
      setShowEditForm(false);

    };



    //usetstates for:
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

        closeStockoutForm();
        closeEditForm();
    }

    const openStockOutForm = (item) =>{ //stock out
        setShowStockoutForm(true);
        setSelectedStockout(item);

        closeRestockForm();
        closeEditForm();
    }

  
    const updateItem = (updatedItem) => {
      // Update the item in the inventoryArray2 (arrow function)
      const updatedInventory = inventoryArray2.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
  
      // Update the inventory array
      inventorySetter(updatedInventory);
    };
  
    let listOfItems = inventoryArray2.map((items) => (
      

      <>
      {/* key to keep track of the array? */}
          <div className='edit-details' key={items.id}>
            <label>ID: {items.id}</label>
            <br />
            <label>Item Name: {items.itemName}</label>
            <br />
            <label>Item Description: {items.itemDescription}</label>
            <br />
            <label>Quantity: {items.itemQuantity}</label>
            <br/><br/>
          </div>
          
      <hr className="row-divider" /> {/* Add a horizontal line between rows */}

      </>    
    ));

    let listOfButtons = inventoryArray2.map((items) => (
      <>
      {/* key to keep track of the array? */}
        <div className="edit-details-buttons" key={items.id}>
          <button  className="edit-button" onClick={() => openEditForm(items)}>Edit</button>
          <button  className="restock-button" onClick={() => openRestockForm(items)}>Restock</button>

          <button  className="stockout-button" onClick={() => openStockOutForm(items)}>Send Out</button>
          <button  className="delete-button" onClick={() => deleteItemClick(items.id)}>Delete</button>
        </div>
        
      <hr className="row-divider" /> {/* Add a horizontal line between rows */}

      </>    
    ));

  
    return (
      <>
      <h3>Edit Item Section</h3>
      <div className="edit-items-container">
        <div className="items-and-actions">
          <div className="items">
              <h4>Items</h4>
              {listOfItems}
          </div>
          <div className="actions">
            <h4>Actions</h4>
              {listOfButtons}
          </div>
        </div>
      </div>

        {/* No longer needed traditonal ways */}
        {/* {showEditForm ?<EditForm item={selectedItem} onSaveChanges={updateItem} onClose={closeEditForm} /> 
        : ''
        } */}

        {showEditForm && (
          <EditForm item={selectedItem} onSaveChanges={updateItem} onClose={closeEditForm} />
        )}

        {showRestockForm && (
            <RestockForm item={selectedRestock} onSaveChanges={updateItem} onClose={closeRestockForm} addHistory={addHistoryClick}/>
        )}

        {showStockoutForm && (
            <StockoutForm item={selectedStockout} onSaveChanges={updateItem} onClose={closeStockoutForm} addHistory={addHistoryClick}/>
        )}
      </>
    );
  }
  
  export default EditItem;