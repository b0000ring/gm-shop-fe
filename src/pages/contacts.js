import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import ContactsForm from 'src/forms/contacts'

import styles from './contacts.module.css'

const Contacts = () => (
  <Layout> 
    <SEO title="Contacts" />
    <div className={styles.info}>
      <h2>Контакты</h2>
      <div className={styles.contact}>Телефон: <span>+ 7 981 994 87 85</span></div>
      <div className={styles.contact}>E-mail: <span>hello@minibit.shop</span></div>
    </div>
    <ContactsForm />
  </Layout>
)

export default Contacts
