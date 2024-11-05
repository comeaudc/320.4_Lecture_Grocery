import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ produce, searchParams, inStock, setInventory }) {
  // Array to store table rows
  let rows = [];
  let cat = null;

  produce.forEach((el) => {
    // if name is not what we are searching for return
    if (el.name.toLowerCase().indexOf(searchParams.toLowerCase()) == -1) return;

    // if item is not in stock return
    if (!el.stocked && inStock) return;

    //Finds new category and makes header rows
    if (cat !== el.category) {
      cat = el.category;
      rows.push(<ProductCategoryRow category={el.category} />);
    }

    rows.push(<ProductRow produce={produce} setInventory={setInventory} product={el} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
