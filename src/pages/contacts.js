import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import ContactsForm from 'src/forms/contacts'

import styles from './contacts.module.css'

const Contacts = () => {

  function onSubmit(values) {
    const url = 'http://localhost:3000/contact'
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
      <SEO title="Contacts" />
      <div className={styles.info}>
        <h2>Контакты</h2>
        <div className={styles.contact}>Телефон: <span>+ 7 981 994 87 85</span></div>
        <div className={styles.contact}>E-mail: <span>hello@minibit.shop</span></div>
      </div>
      <ContactsForm onSubmit={onSubmit} />
    </Layout>
  )
}

export default Contacts
