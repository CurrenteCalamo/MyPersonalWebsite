import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/scss/ComponentStyles/Footer.module.scss'

const Footer: NextPage = () => {
  return (
    <div className={styles.FooterWrapper}>
      © 2022 all rights reserved
      <div className={styles.FooterImageWrapper}>
        <div className={styles.rgb}>
          <Link href="/requisites">
            <a>
              <div className={styles.FooterImageFirst}></div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Footer
