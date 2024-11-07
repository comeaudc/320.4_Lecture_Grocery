import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ProductTable from '../components/ProductTable';
import { getInventory } from '../utilities/controller.mjs';

function FilterableTable() {
  const [inventory, setInventory] = useState(null);
  const [formData, setFormData] = useState({
    searchParams: '',
    inStock: false,
  });

  async function getData() {
    let res = await getInventory();
    let newArr = res.sort((a, b) => a.category.localeCompare(b.category));
    setInventory(newArr);
  }

  useEffect(()=>{
    getData()
  }, [])

  return (
    <>
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
