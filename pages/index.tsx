import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import styles from '../styles/scss/Home.module.scss'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CurrenteCalamo</title>
      </Head>
      <div className={styles.HomeWrapper}>
        <div className={styles.HomeContener}>
          The objective of the project is to help specialists in various fields
          to get more information about technologies. The site provides for the
          creation of a detailed scientific base, including scientific articles
          and
          <Link href="/posts/1">
            <a> publications</a>
          </Link>
          . Also the experience of using various types of modern software
          technologies created by leading experts in these areas. It is planned
          to post detailed contact information. The project is currently under
          development. If you want to participate in the development of a
          non-commercial project, my details are at the
          <Link href="/requisites">
            <a> requisites</a>
          </Link>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Home
