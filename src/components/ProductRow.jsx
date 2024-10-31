function ProductRow({ product }) {
  let inStock = product.stocked ? 'black' : 'red';

  return (
    <tr>
      <td style={{ color: inStock }}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
