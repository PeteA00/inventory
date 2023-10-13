import React, { useState } from 'react';

function EditForm({ item, onSaveChanges, onClose }) {

    const [id,setID] = useState(item.id);
    const [name, setName] = useState(item.itemName);
    const [description, setDescription] = useState(item.itemDescription);
    const [quantity, setQuantity] = useState(item.itemQuantity);

    const handleSave = () => {
    const updatedItem = { // create object called "updatedItem" and store data in it.
        ...item, //spread
        itemName: name,
        itemDescription: description,
        itemQuantity: quantity,
        };
        onSaveChanges(updatedItem); //this function from EditItem.js pass the updated details to it.
        onClose();//This also from EditItem.js, will close the form.
    };

    return (
    <div className="edit-form">
        <h3>Edit Item</h3>
            <label>ID: {id}</label>
            <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
            <label>Description: <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /></label>
            <label>Quantity: <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} /></label>
        <button onClick={handleSave}>Save Changes</button>
        <button onClick={onClose}>Cancel</button>
    </div>
    );
}

export default EditForm;
