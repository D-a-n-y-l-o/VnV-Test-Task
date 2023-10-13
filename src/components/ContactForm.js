import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Input } from './Input';
import { Button } from './Button';

const contactSchema = Yup.object({
  name: Yup
    .string()
    .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ\s\-/.]+$/, 'Please enter valid first name')
    .max(40)
    .required('Name is a required field'),
  email: Yup
    .string()
    .email('Email format is incorrect')
    .required('Email is a required field'),
  telegramUsername: Yup
    .string()
    .matches(/^@[A-Za-z0-9_]+$/, 'Please enter valid Telegram username')
    .required('Telegram username is a required field'),
  phoneNumber: Yup
    .string()
    .matches(/^\+38-\d{3}-\d{3}-\d{2}-\d{2}$/, 'Please enter valid phone number')
    .required('Phone number is a required field'),
});

export const ContactForm = () => {

  const [selectedValue, setSelectedValue] = useState('email');

  const getProperLabelAndPlaceholder = (selectedValue) =>{
    
    let ProperLabelAndPlaceholder = {
      label: '',
      placeholder: ''
    }

    switch (selectedValue) {
      default:
        ProperLabelAndPlaceholder.label = 'Email';
        ProperLabelAndPlaceholder.placeholder = 'example@gmail.com';
        break;
      case 'telegramUsername':
        ProperLabelAndPlaceholder.label = 'Telegram Username';
        ProperLabelAndPlaceholder.placeholder = '@adam_Sand';
        break;
        case 'phoneNumber':
        ProperLabelAndPlaceholder.label = 'Phone number in the following format: +38-050-567-78-09';
        ProperLabelAndPlaceholder.placeholder = '+38-050-567-78-09';
        break;
    }

    return ProperLabelAndPlaceholder;
  };


  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const { handleSubmit, handleChange, values, handleBlur, touched, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      telegramUsername: '',
      phoneNumber: '',
    },
    validationSchema: contactSchema,
  });

  return(
    <form
      onSubmit={handleSubmit}
      className='contact-form'
    >
      <h1 className='contact-form-title'>Contact Form</h1>
      <Input
        label='Name'
        className='contact-form'
        placeholder="Adam Sandler"
        type='text'
        value={values.name}
        name='name'
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.name && errors.name ? <p className='contact-form-error-message' >{errors.name}</p> : null}
      <label htmlFor='select' className='contact-form-label'>Choose preferable method of communication</label>
        <select
          id='select'
          value={selectedValue}
          onChange={handleSelectChange}
          className='contact-form-select'
        >
          <option value='email' className='contact-form-option'>Email</option>
          <option value='telegramUsername' className='contact-form-option'>Telegram</option>
          <option value='phoneNumber' className='contact-form-option'>Phone Number</option>
        </select>
      <Input
        label={getProperLabelAndPlaceholder(selectedValue).label}
        className='contact-form'
        placeholder={getProperLabelAndPlaceholder(selectedValue).placeholder}
        type='text'
        value={values[selectedValue]}
        name={selectedValue}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched[selectedValue] && errors[selectedValue] ? <p className='contact-form-error-message' >{errors[selectedValue]}</p> : null}
      <Button
        className='form-button'
        text='Send'
      />
    </form>
  )
}