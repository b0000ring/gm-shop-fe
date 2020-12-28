import React, { useState, useEffect  } from 'react'
import { navigate  } from 'gatsby'
import { Formik } from 'formik'
import clsx from 'clsx'

import styles from './index.module.css'

function ContactForm({ onSubmit }) {

  const [captchaCheckError, setCaptchaCheckError] = useState(false)
  const [captcha, setCaptcha] = useState(null)
  function getCaptcha() {
    fetch('http://localhost:3000/captcha', {
      mode: 'cors',
      credentials: 'include',
    })
      .then(resp => resp.text())
      .then((data) => {
        setCaptcha(data)
      })
      .catch(() => {
        navigate('/error')
      })
  }

  useEffect(() => {
    getCaptcha()
  }, [])

  return (
    <div>
      <h2>Форма обратной связи</h2>
      <h4>Заполните форму, чтобы задать интересующий Вас вопрос</h4>
      <Formik
        initialValues={{ email: '', name: '', message: '', captcha: '' }}
        validate={values => {
          const errors = {}
          
          if (!values.email) {
            errors.email = 'Обязательное поле';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Некорректный E-mail адрес'
          }

          if (!values.name) {
            errors.name = 'Обязательное поле'
          }

          if (!values.message) {
            errors.message = 'Обязательное поле'
          }

          if (!values.captcha) {
            errors.captcha = 'Обязательное поле'
          }

          return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            //JSON.stringify(values, null, 2)
            setSubmitting(true)
            setCaptchaCheckError(false)
            onSubmit(values)
              .then(rest => rest.text())
              .then(data => {
                if (data === 'error') {
                  setCaptchaCheckError(true)
                } 
                setSubmitting(false)
              })
              .catch(() => {
                navigate('/error')
              })
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
            <div className={styles.bottomPart}>
              <div className={clsx(styles.formItem, styles.captcha)}>
                <label>Капча</label>
                <div className={styles.captchaBody}>
                  <input 
                    type="text"
                    name="captcha"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.captcha}
                  />
                  <img onClick={getCaptcha} src={'data:image/svg+xml;base64,' + btoa(captcha)} />
                </div>
                <div className={styles.error}>
                  {errors.captcha && touched.captcha && errors.captcha}
                  {captchaCheckError && 'Ошибка в капче'}
                </div>
              </div>
              <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
                Отправить
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
} 

export default ContactForm
