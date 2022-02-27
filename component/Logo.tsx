import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/scss/ComponentStyles/Logo.module.scss'
const Logo: NextPage = () => {
  return (
    <div className={styles.HeaderWrapper}>
      <Link href="/">
        <a>
          <div className={styles.HeaderLogo}>CurrenteCalamo</div>
        </a>
      </Link>
      <div>nec cado nec cedo</div>
    </div>
  )
}

export default Logo
