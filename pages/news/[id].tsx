import { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../../component/Footer'
import styles from '../../styles/scss/News.module.scss'
import NextNprogress from 'nextjs-progressbar'
type post = {
  name?: string
  title?: string
  date?: string
  creator?: string
  image?: string
  body?: string[] | any
  _id?: string
}

const News: NextPage<{ post: post }> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <NextNprogress
        color="white"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <div className={styles.NewsWrapper}>
        <div className="content">
          <div className="content-text">
            <h1>{post.title}</h1>
            {post.body.map((durka: string, iter: number) => (
              <p key={iter}>{durka}</p>
            ))}
            <div>
              {post.creator} {post.date}
            </div>

            <div className={styles.PostImage}></div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  )
}
News.getInitialProps = async (req) => {
  const res = await fetch(
    `https://warm-hollows-19814.herokuapp.com/${req.query.id}`
  )
  const post = await res.json()

  return { post }
}
export default News
