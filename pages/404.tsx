import type { NextPage } from 'next'
import FunnyCat from '../components/FunnyCat'
import Head from 'next/head'
import styles from '../styles/scss/Error.module.scss'
const Error: NextPage = () => {
  return (
    <>
      <Head>
        <title>This page could not befound</title>
      </Head>
      <FunnyCat></FunnyCat>
      <div className={styles.ErrorWrapper}>This page not be found.</div>
    </>
  )
}

export default Error
