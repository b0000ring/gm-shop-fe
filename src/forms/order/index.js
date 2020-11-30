import React from 'react'
import { Formik } from 'formik'

import styles from './index.module.css'

const fields = [
  {
    label: 'Имя',
    type: 'text',
    key: 'name',
    isRequired: true,
  },
  {
    label: 'Фамилия',
    type: 'text',
    key: 'surname',
    isRequired: true,
  },
  {
    label: 'Адрес доставки',
    type: 'text',
    key: 'address',
    isRequired: true,
    placeholder: 'Город, улица, номер дома, номер квартиры'
  },
  {
    label: 'Почтовый индекс',
    type: 'text',
    key: 'postIndex',
    isRequired: true,
  },
  {
    label: 'Телефон',
    type: 'text',
    key: 'phone',
    isRequired: true,
  },
  {
    label: 'E-mail',
    type: 'text',
    key: 'email',
    isRequired: true,
  },
]

function ContactForm() {
  return (
    <div>
      <h2>Форма оформления заказа</h2>
      <h4>Пожалуйста, проверьте корректность данных для доставки</h4>
      <Formik
        initialValues={{ 
          name: '',
          surname: '',
          address: '',
          postIndex: '',
          phone: '',
          email: '',
          phone: '',
          comment: ''
        }}
        validate={values => {
          const errors = {};
          
          if (!values.email) {
            errors.email = 'Обязательное поле';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Некорректный E-mail адрес';
          }

          if (!values.name) {
            errors.name = 'Обязательное поле';
          }

          if (!values.message) {
            errors.message = 'Обязательное поле';
          }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
       }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        /* and other goodies */
        }) => {
          function getInputs() {
            return fields.map(item => (
              <div className={styles.formItem}>
                <label>{item.label}</label>
                <input
                  placeholder={item.placeholder}
                  type={item.type}
                  name={item.key}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[item.key]}
                />
              </div>
            ))
          }
          return (
            <form className={styles.contactsForm} onSubmit={handleSubmit}>
              {getInputs()}
              <div className={styles.formItem}>
                <label>Комментарий</label>
                <textarea
                  placeholder="Дополнительная информация для службы доставки"
                  type="text"
                  name="comment"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
                <div className={styles.error}>
                  {errors.message && touched.message && errors.message}
                </div>
              </div>
              <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
                Перейти к подтверждению
              </button>
            </form>
          )
        }}
      </Formik>
    </div>
  )
} 

export default ContactForm