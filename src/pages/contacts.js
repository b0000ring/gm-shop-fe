import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import ContactsForm from 'src/forms/contacts'

import styles from './contacts.module.css'
import phoneIcon from './phone.svg'
import mailIcon from './email.svg'

const Contacts = () => {

  function onSubmit(values) {
    const url = '/api/contact'
    const options = {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }
    return fetch(url, options)
  }

  return (
    <Layout> 
      <SEO title="Контакты" />
      <div className="content">
        <div className={styles.header}>
          <h2 className={styles.title}>Контакты</h2>
        </div>
        <div className={styles.contacts}>
          <div className={styles.info}>
            <div className={styles.contact}><img src={phoneIcon} /> <span>+ 7 (981) 994-87-85</span></div>
            <div className={styles.contact}><img src={mailIcon} /> <span>hello@minibit.shop</span></div>
          </div>
          <ContactsForm onSubmit={onSubmit} />
          <div className={styles.text}>
            Вы можете задать интересующий вас вопрос, заполнив форму обратной связи. Или свяжитесь 
            с нами по телефону или электронной почте.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contacts
