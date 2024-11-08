import { useState, useEffect } from 'react';
import { updateProduce, findOneProduce } from '../utilities/controller.mjs';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateForm() {
  const nav = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    async function getData() {
      let data = await findOneProduce(id);
      let num = data.price.split('');
      num.shift();
      data.price = Number(num);
      setFormData(data);
    }

    getData();
  }, []);

  function handleClick(e) {
    nav('/');
  }

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
    try {
      e.preventDefault();
      let res = await updateProduce(id, formData);
      nav('/');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <h2>Update Produce</h2>
      {formData ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:{' '}
            <input
              onChange={handleChange}
              value={formData.name}
              type='text'
              name='name'
            />
          </label>
          <br />
          <label>
            Price:{' '}
            <input
              onChange={handleChange}
              value={formData.price}
              type='number'
              name='price'
            />
          </label>
          <br />
          <label>
            In Stock:{' '}
            <input
              onChange={handleChange}
              checked={formData.stocked}
              type='checkbox'
              name='stocked'
            />
          </label>
          <br />
          <label>
            Category:{' '}
            <select
              onChange={handleChange}
              value={formData.category}
              type='text'
              name='category'
            >
              <option value='Vegetables'>Vegetables</option>
              <option value='Fruits'>Fruits</option>
            </select>
          </label>
          <br />
          <input type='submit' />
        </form>
      ) : (
        <h2>Loading...</h2>
      )}
      <button onClick={handleClick}>Close Form</button>
    </>
  );
}

export default UpdateForm;
