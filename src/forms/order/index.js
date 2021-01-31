import React, { useState } from 'react'
import { Formik } from 'formik'
import { Link } from 'gatsby'

import styles from './index.module.css'
import clsx from 'clsx'

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
    label: 'Адрес доставки (Город, улица, дом, квартира)',
    type: 'text',
    key: 'address',
    isRequired: true,
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

function ContactForm({ onSubmit, data }) {
  const [isAgree, setIsAgree] = useState(false)
  return (
    <div className={styles.wrapper}>
      <p>
        Пожалуйста, заполните все обязательные поля формы и проверьте правильность данных для оформления и доставки 
        заказа. 
      </p>
      <Formik
        initialValues={Object.keys(data).length ? data : { 
          name: '',
          surname: '',
          address: '',
          postIndex: '',
          phone: '',
          email: '',
          phone: '',
          comment: '',
        }}
        validate={values => {
          const errors = {}
          if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Некорректный E-mail адрес';
          }

          fields.forEach(item => {
            if(item.isRequired && !values[item.key]) {
              errors[item.key] = 'Обязательное поле'
            }
          });
          return errors;
        }}
        onSubmit={(values) => {
          onSubmit(values)
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
        }) => {
          function getInputs() {
            return fields.map(item => {
              const isError = errors[item.key] && touched[item.key]
              return (
                <div className={clsx(styles.formItem, isError && styles.errorWrapper)}>
                  <input
                    placeholder={item.label}
                    type={item.type}
                    name={item.key}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[item.key]}
                  />
                  <div className={styles.error}>
                    {isError && errors[item.key]}
                  </div>
                </div>
              )
            })
          }
          return (
            <form className={styles.contactsForm} onSubmit={handleSubmit}>
              {getInputs()}
              <div className={styles.formItem}>
                <textarea
                  placeholder="Дополнительная информация для службы доставки"
                  type="text"
                  name="comment"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.comment}
                />
                <div className={styles.error}>
                  {errors.message && touched.message && errors.message}
                </div>
              </div>
              <div className={styles.agreement}>
                <input type="checkbox" value={isAgree} onChange={() => setIsAgree(!isAgree)} />
                Я согласен(на) с <Link href="/docs/privacy.docx"> политикой обработки персональных данных</Link>
              </div>
              <button className={clsx(styles.submitButton, !isAgree && styles.disabled)} type="submit" disabled={isSubmitting}>
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
