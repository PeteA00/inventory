import React, { useState } from 'react';

function StockoutForm({item, onSaveChanges, onClose, addHistory}){

    const [id,setID] = useState(item.id);
    const [name, setName] = useState(item.itemName);
    const [description, setDescription] = useState(item.itemDescription);
    const [quantity, setQuantity] = useState(item.itemQuantity);

    const [person, setPerson] = useState("None");
    const [historyQuantity, setHistoryQuantity] = useState(0);

    const handleSave = () => {
    const updatedItem = { // create object called "updatedItem" and store data in it.
        ...item, //spread
        itemName: name,
        itemDescription: description,
        itemQuantity: parseInt(quantity) - parseInt(historyQuantity), //old value minus new value for moving out stock
        };
        onSaveChanges(updatedItem); //this function from EditItem.js pass the updated details to it.

        let action = "Send Stock Out";
        let nameOfClass = "history-out";

        addHistory(id, name, description, action, historyQuantity, person, nameOfClass);
        onClose();//This also from EditItem.js, will close the form.
    };

    return (
    <div className="edit-form">
        <h3>Send Stock Out</h3>
            <label>ID: {id}</label>
            <br/>
            <label>Name:{name}</label>
            <br/>
            <label>Description: {description} </label>
            <br/>
            <label>Current Quantity: {quantity}</label>
            <br/>
            <label>Send Out Quantity: <input type="number" onChange={(e) => setHistoryQuantity(e.target.value) } /></label>
            <br/>
            <label>Receiver: <input type="text" value={person} onChange={(e) => setPerson(e.target.value)} /></label>
            <br/>
            <div className="edit-form-button">
                <button className="save-edit" onClick={handleSave}>Save Changes</button>
                <button className="cancel-edit" onClick={onClose}>Cancel</button>
            </div>
        
    </div>
    );
}



export default StockoutForm;