import React, { useState } from 'react';

const Form = () => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  const handleSubmit = () => {
    alert("Form is submitted");
  }

  return (
    <form onSubmit={handleSubmit} className="form__wrapper">
      <h1 className="form__wrapper-title">Create an Account</h1>
      <div className="form">
        <span className="form__title required">Name</span>
        <input
          value={data.name || ''}
          name="name"
          onChange={handleChange}
          className="form__input"
          required
        />
        {errors.name && <p className="form__error">{errors.name}</p>}
      </div>
      <div className="form">
        <span className="form__title required">Email</span>
        <input
          value={data.email || ''}
          name="email"
          type="email"
          onChange={handleChange}
          className="form__input"
          required
        />
        {errors.email && <p className="form__error">{errors.email}</p>}
      </div>
      <div className="form">
        <div className="form__row">
          <div className="form">
            <span className="form__title required">ZIP Code</span>
            <input
              value={data.code || ''}
              name="code"
              onChange={handleChange}
              className="form__input"
              required
            />
            {errors.code && <p className="form__error">{errors.code}</p>}
          </div>
          <div className="form">
            <span className="form__title required">Age</span>
            <input
              value={data.age || ''}
              name="age"
              type="number"
              onChange={handleChange}
              className="form__input"
              required
            />
            {errors.age && <p className="form__error">{errors.age}</p>}
          </div>
        </div>
      </div>
      <div className="form">
        <span className="form__title required">Gender</span>
        <div className="form__radio">
          <label className="custom-input--radio">
            <input
              value="male"
              name="gender"
              type="radio"
              checked={data.gender === "male"}
              onChange={handleChange}
              className="form__input"
              required
            />
            <span className="form__title">Male</span>
            <span class="custom-input__checkmark"></span>
          </label>
        </div>
        <div className="form__radio">
          <label className="custom-input--radio">
            <input
              value="female"
              name="gender"
              type="radio"
              checked={data.gender === "female"}
              onChange={handleChange}
              className="form__input"
              required
            />
            <span className="form__title">Female</span>
            <span class="custom-input__checkmark"></span>
          </label>
        </div>
      </div>
      <div className="form form__separator">
        <div className="form__checkbox">
          <label className="custom-input--checkbox">
            <input type="checkbox" name="checkbox" value="value" />
            <span>I agree to the Terms & Conditions</span>
            <span class="custom-input__checkmark"></span>
          </label>
        </div>
      </div>
      <button type="submit" className="form__submit">
        Submit
      </button>
    </form>
  );
};

export default Form;