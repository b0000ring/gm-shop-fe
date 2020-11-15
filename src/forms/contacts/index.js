import React from 'react'
import { Formik } from 'formik'

import styles from './index.module.css'

function ContactForm() {
  return (
    <div>
      <h2>Форма обратной связи</h2>
      <h4>Заполните форму, чтобы задать интересующий Вас вопрос</h4>
      <Formik
        initialValues={{ email: '', name: '', message: '' }}
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
        }) => (
          <form className={styles.contactsForm} onSubmit={handleSubmit}>
            <div className={styles.formItem}>
              <label>Ваше имя</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <div className={styles.error}>
                {errors.name && touched.name && errors.name}
              </div>
            </div>
            <div className={styles.formItem}>
              <label>Ваш e-mail</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className={styles.error}>
                {errors.email && touched.email && errors.email}
              </div>
            </div>
            <div className={styles.formItem}>
              <label>Сообщение</label>
              <textarea
                type="text"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <div className={styles.error}>
                {errors.message && touched.message && errors.message}
              </div>
            </div>
            <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
              Отправить
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
} 

export default ContactForm