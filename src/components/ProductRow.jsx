import { useState } from 'react';
import { deleteProduce } from '../utilities/controller.mjs';
import UpdateForm from './UpdateForm';

function ProductRow({ product, setInventory, produce }) {
  const [toggle, setToggle] = useState(false);
  let inStock = product.stocked ? 'black' : 'red';

  async function handleDelete() {
    let res = await deleteProduce(product._id);

    if (res) {
      let copy = produce.filter((el) => el._id !== product._id);
      setInventory(copy);
    }
  }

  function handleUpdate() {}

  return toggle ? (
    <UpdateForm product={product} setToggle={setInventory} />
  ) : (
    <tr>
      <td style={{ color: inStock }}>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
      <td>
        <button onClick={() => setToggle((t) => !t)}>Edit</button>
      </td>
    </tr>
  );
}

export default ProductRow;
