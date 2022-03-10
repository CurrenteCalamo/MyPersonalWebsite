import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../component/Footer'
import styles from '../styles/scss/Requisites.module.scss'
import Link from 'next/link'

const Requisites: NextPage = () => {
  return (
    <>
      <Head>
        <title>CurrenteCalamo</title>
      </Head>
      <div className={styles.RequisitesWrapper}>
        <div className={styles.Contener}>
          <div className={styles.ContenerFirst}>
            <div className={styles.ContenerTitle}>
              <h2>Georgy Igorev. Khrulev</h2>
              <h2>Internet point of presence</h2>
            </div>
            <div className={styles.ContenerNav}>
              <div>Mail pppp43777@gmail.com</div>
              <div>Phone 8(943)894-84-48</div>
              <div>
                <Link href="https://github.com/AbIgneIgnem">
                  <a>Github AbIgneAbIgnem </a>
                </Link>
              </div>
              <div>
                <Link href="https://twitter">
                  <a>Twitter @CurrenteCalamo</a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.ContenerSecond}></div>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Requisites
