import React, { useState } from 'react';

const Form = () => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});
  const [validations] = useState({
    name: {
      // eslint-disable-next-line no-useless-escape
      isValid: (value) => /^[ a-zA-Z\-\’]+$/.test(value),
      message: "You're not allowed to use special characters or numbers in your name.",
    },
    code: {
      isValid: (value) => /^\d{2}(-\d{3})?$/.test(value),
      message: "ZIP code is not valid. Example format (**-***), where * is a digit."
    },
    age: {
      isValid: (value) => parseInt(value, 10) > 18,
      message: "You have to be at least 19 years old.",
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
    setErrors({});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let customErrors = {};

    Object.keys(user).forEach((key) => {
      const value = user[key];
      
      if (validations[key] && !validations[key].isValid(value)) {
        customErrors[key] = validations[key].message;
      }
    });

    if (Object.keys(customErrors).length === 0) {
      alert("Account form is submitted");
    }

    setErrors({...errors, ...customErrors});
  }

  return (
    <form onSubmit={handleSubmit} className="form__wrapper">
      <h1 className="form__wrapper-title">Create an Account</h1>
      <div className="form">
        <span className="form__title required">Name</span>
        <input
          value={user.name || ''}
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
          value={user.email || ''}
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
              value={user.code || ''}
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
              value={user.age || ''}
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
              checked={user.gender === "male"}
              onChange={handleChange}
              className="form__input"
              required
            />
            <span className="form__title">Male</span>
            <span className="custom-input__checkmark"></span>
          </label>
        </div>
        <div className="form__radio">
          <label className="custom-input--radio">
            <input
              value="female"
              name="gender"
              type="radio"
              checked={user.gender === "female"}
              onChange={handleChange}
              className="form__input"
              required
            />
            <span className="form__title">Female</span>
            <span className="custom-input__checkmark"></span>
          </label>
        </div>
      </div>
      <div className="form form__separator">
        <div className="form__checkbox">
          <label className="custom-input--checkbox">
            <input type="checkbox" name="checkbox" value="value" required />
            <span>I agree to the Terms & Conditions</span>
            <span className="custom-input__checkmark"></span>
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