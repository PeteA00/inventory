

import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//import components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import EditItem from './components/EditItem';
import History from './components/History';


//import route for navbar.
import {Route, Routes} from 'react-router-dom';

// Use this as a counter
// that is incremented to provide
// a key props for new item to be added
// to the list
let nextId = 0;

function App() {


  // initially empty array for state
  // to be used to keep track of inventory items
  let [inventory, setInventory] = useState([]); // number


  function addInventoryItemClick(name, description, quantity) {

    let newInventoryItem = { id: nextId++, itemName: name, itemDescription : description,  itemQuantity : quantity }; //create object with values from add item

    setInventory([...inventory, newInventoryItem]); //insert the object values to the inventory array
  }


  let [history, setHistory] = useState([]);
  

  return (
    <>
    <Header/>
      <Navbar/>
      <div className="main-container">
        <Routes>
          <Route path="/inventory" element={<ItemList inventoryArray={inventory}/>}></Route>
          <Route path="/add" element={<AddItem onAddNewItem={addInventoryItemClick}/>}></Route>
          <Route path="/edit" element={< EditItem inventoryArray2={inventory} inventorySetter={setInventory} historyArray={history} historySetter={setHistory}/>}></Route>
          <Route path="/history" element={<History historyArray={history}/>}></Route>
        </Routes>
    </div>
    <Footer/>
    </>
    
  );
}

export default App;



