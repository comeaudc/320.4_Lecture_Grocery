import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import CreateForm from './CreateForm';
import { getInventory } from '../utilities/controller.mjs';

function FilterableTable() {
  const [inventory, setInventory] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState({
    searchParams: '',
    inStock: false,
  });

  async function handleClick(e) {
    let res = await getInventory();
    let newArr = res.sort((a, b) => a.category.localeCompare(b.category));
    setInventory(newArr);
  }

  return (
    <>
      {toggle ? (
        <CreateForm
          inventory={inventory}
          setInventory={setInventory}
          setToggle={setToggle}
        />
      ) : (
        <button onClick={() => setToggle((t) => !t)}>Add New Produce</button>
      )}

      <button onClick={handleClick}>Get Inventory</button>
      <SearchBar formData={formData} setFormData={setFormData} />
      {inventory ? (
        <ProductTable
          searchParams={formData.searchParams}
          inStock={formData.inStock}
          produce={inventory}
          setInventory={setInventory}
        />
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}

export default FilterableTable;
