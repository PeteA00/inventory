

// Code for AddItem.js

import {useState} from 'react';

function AddItem({onAddNewItem}) {

    const  [itemNameValue, setItemNameValue] =  useState('');
    const  [itemDescriptionValue, setItemDescriptionValue] =  useState('');
    const  [itemQuantityValue, setItemQuantityValue] =  useState(0);

	const  handleItemNameChange = (event) => {
		setItemNameValue(event.target.value);
	};

	const  handleItemDescriptionChange = (event) => {
		setItemDescriptionValue(event.target.value);
	};    

	const  handleItemQuantityChange = (event) => {
		setItemQuantityValue(event.target.value);
	};

    function handleButtonClick(){
    

        // No longer need to use the traditional JavaScript way
        // let name = document.querySelector("#name");
        // let description = document.querySelector("#desc");
        // let quantity = document.querySelector("#quantity");
    
    
        console.log("name:" + itemNameValue);
        console.log(itemDescriptionValue);
        console.log(itemQuantityValue);
    
    
        onAddNewItem(itemNameValue, itemDescriptionValue, itemQuantityValue);
    
    
        /* Need Code to add all the data from input to DB */
    }

    return(
        <>
         <h3>Add Item Form</h3>
            <div className="additem-container">
                <p>Fill in the details</p>
                <br/>

                {/* <form onSubmit={handleButtonClick} className="add-item-form"> */}

                <div className="add-item-form">
                    
                    <div className="item-input">
                        <label>Item Name:</label>
                        <input type="text" id="name" onChange={handleItemNameChange}></input>
                    </div>
                    
                    <br/>
                    
                    <div className="item-input">
                        <label>Item Description:</label>
                        <input type="text" id="desc" onChange={handleItemDescriptionChange}></input>
                    </div>
                    
                    <br/>
                    
                    <div className="item-input">
                        <label>Quantity:</label>
                        <input type="number" id="quantity" onChange={handleItemQuantityChange}></input>
                    </div>

                    <br/>

                    {/* <button type="submit">Add Item</button> */}
                    <button onClick={handleButtonClick}>Add Item</button>

                {/* </form> */}

                </div>

            </div>
        </>
        
    )
}



export default AddItem;