function UpdateForm({ setToggle, product }) {
  return (
    <tr>
      <td>
        <input type='text' value={product.name} name='name' />
      </td>
      <td>
        <input type='number' value={product.price[1]} name='price' />
      </td>
      <td>
        <input type='checkbox' name='stocked' checked={product.stocked} />
      </td>
      <td>
        <button onClick={() => setToggle((t) => !t)}>Update</button>
      </td>
    </tr>
  );
}

export default UpdateForm;
