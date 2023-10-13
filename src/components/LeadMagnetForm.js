import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Input } from './Input';
import { Button } from './Button';

const leadMagnetSchema = Yup.object({
  name: Yup
    .string()
    .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ\s\-/.]+$/, 'Please enter valid first name')
    .max(40)
    .required('Name is a required field'),
  email: Yup
    .string()
    .email('Email format is incorrect')
    .required('Email is a required field'),
  phoneNumber: Yup
    .string()
    .matches(/^\+38-\d{3}-\d{3}-\d{2}-\d{2}$/, 'Please enter valid phone number')
    .required('Phone number is a required field'),
});

export const LeadForm = () => {

  const { handleSubmit, handleChange, values, handleBlur, touched, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
    },
    validationSchema: leadMagnetSchema,
  });

  return(
    <form
      onSubmit={handleSubmit}
      className='lead-form'
    >
      <Input
        label='Name'
        className='lead-form'
        placeholder="Adam Sandler"
        type='text'
        value={values.name}
        name='name'
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.name && errors.name ? <p className='lead-form-error-message' >{errors.name}</p> : null}
      <Input
        label='Email'
        className='lead-form'
        placeholder="example@gmail.com"
        type='text'
        value={values.email}
        name='email'
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.email && errors.email ? <p className='lead-form-error-message' >{errors.email}</p> : null}
      <Input
        label='Phone number in the following format: +38-050-567-78-09'
        className='lead-form'
        placeholder="+38-050-567-78-09"
        type='text'
        value={values.phoneNumber}
        name='email'
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.phoneNumber && errors.phoneNumber ? <p className='lead-form-error-message' >{errors.phoneNumber}</p> : null}
      <Button
        className='form-button form-button-wide'
        text='Get Discount'
      />
    </form>
  )
}