import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import produce from '../utilities/data.mjs';

function FilterableTable() {
  const [inventory, setInventory] = useState(produce);
  const [formData, setFormData] = useState({
    searchParams: '',
    inStock: false,
  });

  return (
    <>
      <SearchBar formData={formData} setFormData={setFormData} />
      <ProductTable
        searchParams={formData.searchParams}
        inStock={formData.inStock}
        produce={inventory}
      />
    </>
  );
}

export default FilterableTable;
