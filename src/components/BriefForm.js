import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Input } from './Input';
import { Button } from './Button';

const briefSchema = Yup.object({
    companyName: Yup
        .string()
        .required('The field is required'),
    domainName: Yup
        .string()
        .required('The field is required'),
    productDescription: Yup
        .string()
        .required('The field is required'),
    contactInformation: Yup
        .string()
        .required('The field is required'),
    targetAudience: Yup
        .string()
        .required('The field is required'),
    competitiveAdvantages: Yup
        .string()
        .required('The field is required'),
    purposeOfWebsite: Yup
        .string()
        .required('The field is required'),
    siteType: Yup
        .string()
        .required('The field is required'),
    projectBudget: Yup
        .string()
        .required('The field is required'),
    paymentMethod: Yup
        .string()
        .required('The field is required'),
});

export const BriefForm = () => {

    const { handleSubmit, handleChange, values, handleBlur, touched, errors } = useFormik({
        initialValues: {
            companyName: '',
            domainName: '',
            productDescription: '',
            contactInformation: '',
            targetAudience: '',
            competitiveAdvantages: '',
            purposeOfWebsite: '',
            siteType: '',
            projectBudget: '',
            paymentMethod: '',
        },
        validationSchema: briefSchema,
    });

    return(
        <form
            onSubmit={handleSubmit}
            className='brief-form'
        >
            <h1 className='brief-form-title'>Brief Form</h1>
            <div className='brief-form-grid'>
                <div className='brief-form-grid-cell'>
                    <Input
                        label='Full name of the company and website'
                        className='brief-form'
                        type='textarea'
                        value={values.companyName}
                        name='companyName'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.companyName ? <p className='brief-form-error-message' >{errors.companyName}</p> : null}
                </div>
                <div className='brief-form-grid-cell'>
                    <Input
                        label='Domain name of the site'
                        className='brief-form'
                        type='textarea'
                        value={values.domainName}
                        name='domainName'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.domainName ? <p className='brief-form-error-message' >{errors.domainName}</p> : null}
                </div>
                <div className='brief-form-grid-cell'>
                    <Input
                        label='Describe the brand/service/product'
                        className='brief-form'
                        type='textarea'
                        value={values.productDescription}
                        name='productDescription'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.productDescription ? <p className='brief-form-error-message' >{errors.productDescription}</p> : null}
                </div>
                <div className='brief-form-grid-cell'>
                    <Input
                        label='Сontact information'
                        className='brief-form'
                        type='textarea'
                        value={values.contactInformation}
                        name='contactInformation'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.contactInformation ? <p className='brief-form-error-message' >{errors.contactInformation}</p> : null}
                </div>
                <div className='brief-form-grid-cell'> 
                    <Input
                        label='Target audience'
                        className='brief-form'
                        type='textarea'
                        value={values.targetAudience}
                        name='targetAudience'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.targetAudience ? <p className='brief-form-error-message' >{errors.targetAudience}</p> : null}
                </div>
                <div className='brief-form-grid-cell'> 
                    <Input
                        label='Сompetitive advantages'
                        className='brief-form'
                        type='textarea'
                        value={values.competitiveAdvantages}
                        name='competitiveAdvantages'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.competitiveAdvantages ? <p className='brief-form-error-message' >{errors.competitiveAdvantages}</p> : null}
                </div>
                <div className='brief-form-grid-cell'>
                    <Input
                        label='The purpose of creating the site'
                        className='brief-form'
                        type='textarea'
                        value={values.purposeOfWebsite}
                        name='purposeOfWebsite'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.purposeOfWebsite ? <p className='brief-form-error-message' >{errors.purposeOfWebsite}</p> : null}
                </div>
                <div className='brief-form-grid-cell'>
                    <Input
                        label='Site type'
                        className='brief-form'
                        type='textarea'
                        value={values.siteType}
                        name='siteType'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.siteType ? <p className='brief-form-error-message' >{errors.siteType}</p> : null}
                </div>
                <div className='brief-form-grid-cell'>
                    <Input
                        label='Project budget'
                        className='brief-form'
                        type='textarea'
                        value={values.projectBudget}
                        name='projectBudget'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.projectBudget ? <p className='brief-form-error-message' >{errors.projectBudget}</p> : null}
                </div>
                <div className='brief-form-grid-cell'>
                    <Input
                        label='Preferred payment method'
                        className='brief-form'
                        type='textarea'
                        value={values.paymentMethod}
                        name='paymentMethod'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.paymentMethod ? <p className='brief-form-error-message' >{errors.paymentMethod}</p> : null}
                </div>
            </div>
            <div className='brief-form-button-container'>
                <Button
                    className='form-button'
                    text='Send'
                />
            </div>
        </form>
    )
}