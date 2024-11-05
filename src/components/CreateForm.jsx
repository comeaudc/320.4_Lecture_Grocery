import { useState } from 'react';
import { createProduce } from '../utilities/controller.mjs';

function CreateForm({ setToggle, setInventory, inventory }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stocked: false,
    category: 'Vegetables',
  });

  function handleChange(e) {
    if (e.target.name == 'stocked') {
      setFormData({
        ...formData,
        stocked: !formData.stocked,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await createProduce(formData);
    setInventory([...inventory, res]);
    setToggle(t => !t)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input onChange={handleChange} type='text' name='name' />
        </label>
        <br />
        <label>
          Price: <input onChange={handleChange} type='number' name='price' />
        </label>
        <br />
        <label>
          In Stock:{' '}
          <input onChange={handleChange} type='checkbox' name='stocked' />
        </label>
        <br />
        <label>
          Category:{' '}
          <select onChange={handleChange} type='text' name='category'>
            <option value='Vegetables'>Vegetables</option>
            <option value='Fruits'>Fruits</option>
          </select>
        </label>
        <br />
        <input type='submit' />
      </form>
      <button onClick={() => setToggle((t) => !t)}>Close Form</button>
    </>
  );
}

export default CreateForm;
