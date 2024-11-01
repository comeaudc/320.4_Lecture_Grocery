import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import CreateForm from './CreateForm';
import axios from 'axios';

function FilterableTable() {
  const [inventory, setInventory] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState({
    searchParams: '',
    inStock: false,
  });

  async function handleClick(e) {
    try {
      let url = 'http://localhost:3000/api/produce';

      let res = await axios.get(url);


      setInventory(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
    {toggle?  <CreateForm setToggle={setToggle} />: <button onClick={()=>setToggle(t => !t)}>Add New Produce</button>}
    
     
      <button onClick={handleClick}>Get Inventory</button>
      <SearchBar formData={formData} setFormData={setFormData} />
      {inventory ? (
        <ProductTable
          searchParams={formData.searchParams}
          inStock={formData.inStock}
          produce={inventory}
        />
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}

export default FilterableTable;
