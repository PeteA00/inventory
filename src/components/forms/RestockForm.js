import React, { useState } from 'react';

function RestockForm( {item, onSaveChanges, onClose, addHistory}){

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
        itemQuantity: parseInt(quantity) + parseInt(historyQuantity), //new value add with old value for restock
        };
        onSaveChanges(updatedItem); //this function from EditItem.js pass the updated details to it.

        let action = "Restock";
        let nameOfClass = "history-in";

        addHistory(id, name, description, action, historyQuantity, person, nameOfClass);
        onClose();//This also from EditItem.js, will close the form.
    };

    return (
    <div className="edit-form">
        <h3>Restock Item</h3>
            <label>ID: {id}</label>
            <br/>
            <label>Name:{name}</label>
            <br/>
            <label>Description: {description} </label>
            <br/>
            <label>Current Quantity: {quantity}</label>
            <br/>
            <label>Restock Quantity: <input type="number" onChange={(e) => setHistoryQuantity(e.target.value) } /></label>
            <br/>
            <label>Supplier: <input type="text" value={person} onChange={(e) => setPerson(e.target.value)} /></label>
            <br/>
        <button onClick={handleSave}>Save Changes</button>
        <button onClick={onClose}>Cancel</button>
    </div>
    );
}



export default RestockForm;