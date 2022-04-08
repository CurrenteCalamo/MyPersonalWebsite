import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/scss/Components/FunnyCat.module.scss'

const FunnyCat: NextPage = () => {
  const cat1 = '/image/cat1.png'
  const cat2 = '/image/cat2.png'
  const cat3 = '/image/cat3.png'
  const cat4 = '/image/cat4.png'
  const cat5 = '/image/cat5.png'
  const cat6 = '/image/cat6.png'

  const SmileCat: string[] = [cat1, cat2, cat3, cat4, cat5, cat6]

  function RandomCat(): string {
    return SmileCat[Math.floor(Math.random() * 5)]
  }
  const ErrorCat = {
    width: 150,
    height: 150,
    background: `no-repeat center/80% url(${RandomCat()})`,
  }
  return (
    <>
      <div className={styles.FunnyCatWrapper}>
        <Link href="/">
          <a>
            <div title="Funny cat" style={ErrorCat}></div>
          </a>
        </Link>
      </div>
    </>
  )
}
export default FunnyCat
