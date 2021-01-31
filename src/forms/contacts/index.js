import React, { useState, useEffect  } from 'react'
import { navigate, Link } from 'gatsby'
import { Formik } from 'formik'
import clsx from 'clsx'

import styles from './index.module.css'

function ContactForm({ onSubmit }) {
  const [isAgree, setIsAgree] = useState(false)
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
  
  function getCaptchaPicture() {
    if(typeof btoa !== 'undefined') {
      return btoa(captcha)
    }
  }

  return (
    <div>
      <h2 className={styles.title}>Задайте нам вопрос</h2>
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
          onSubmit={(values, { setSubmitting, resetForm }) => {
            //JSON.stringify(values, null, 2)
            setSubmitting(true)
            setCaptchaCheckError(false)
            onSubmit(values)
              .then(rest => rest.text())
              .then(data => {
                if (data === 'error') {
                  setCaptchaCheckError(true)
                } else {
                  resetForm({})
                  getCaptcha()        
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
            <div className={clsx(styles.formItem, errors.name && touched.name && styles.errorWrapper)}>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <div className={styles.error}>
                {errors.name && touched.name && errors.name}
              </div>
            </div>
            <div className={clsx(styles.formItem, errors.email && touched.email && styles.errorWrapper)}>
              <input
                type="email"
                name="email"
                placeholder="Ваш E-mail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className={styles.error}>
                {errors.email && touched.email && errors.email}
              </div>
            </div>
            <div className={clsx(styles.formItem, errors.message && touched.message && styles.errorWrapper)}>
              <textarea
                placeholder="Сообщение"
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
              <div className={styles.agreement}>
                <input type="checkbox" value={isAgree} onChange={() => setIsAgree(!isAgree)} />
                Я согласен(на) с <Link href="/docs/privacy.docx"> политикой обработки персональных данных</Link>
              </div>
              <div className={clsx(styles.formItem, styles.captcha)}>
                <div className={clsx(styles.captchaBody, errors.captcha && touched.captcha && styles.errorWrapper)}>
                  <img src={'data:image/svg+xml;base64,' + getCaptchaPicture()} />
                  <input 
                    placeholder="Капча"
                    type="text"
                    name="captcha"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.captcha}
                  />
                </div>
                <div className={styles.error}>
                  {errors.captcha && touched.captcha && errors.captcha}
                  {captchaCheckError && 'Ошибка в капче'}
                </div>
                <div onClick={getCaptcha} className={styles.captchaUpdate}>Обновить</div>
              </div>
              <button className={clsx(styles.submitButton, !isAgree && styles.disabled)} type="submit" disabled={isSubmitting || !isAgree}>
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
