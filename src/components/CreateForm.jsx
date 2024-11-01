import { useState } from 'react';
import axios from 'axios';

function CreateForm({ setToggle }) {
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
    let url = 'http://localhost:3000/api/produce';

    e.preventDefault();
    formData.price = '$' + formData.price;
    let res = await axios.post(url, formData);

    console.log(res.data);
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
