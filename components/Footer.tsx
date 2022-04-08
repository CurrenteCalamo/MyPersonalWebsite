import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/scss/Components/Footer.module.scss'

const Footer: NextPage = () => {
  return (
    <div className={styles.FooterWrapper}>
      © 2022 all rights reserved
      <div className={styles.FooterImageWrapper}>
        <div className={styles.rgb}>
          <Link href="/requisites">
            <a>
              <div className={styles.FooterImage}></div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Footer
