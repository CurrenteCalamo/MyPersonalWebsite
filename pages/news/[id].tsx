import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
import { useEffect, useState } from 'react'
import Footer from '../../component/Footer'
import styles from '../../styles/scss/News.module.scss'
type post = {
  name?: string
  title?: string
  date?: string
  creator?: string
  image?: string
  body?: string[] | any
  _id?: string
}

const News: NextPage<{ post: post }> = ({ post: serverPost }) => {
  const router = useRouter()
  const [post, setPosts] = useState(serverPost)
  useEffect(() => {
    async function load() {
      fetch(
        `https://warm-hollows-19814.herokuapp.com/posts/getAll${router.query.id}`
      )
        .then((response) => response.json())
        .then((post) => setPosts(post))
    }
    if (!serverPost) {
      load()
    }
  })
  if (!post) {
    return (
      <>
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <h1>Loading...</h1>
      </>
    )
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <div className={styles.NewsWrapper}>
        <div className="content">
          <div className="content-text">
            <h1>{post.title}</h1>
            {post.body.map((body: string, iter: string) => (
              <p key={iter}>{body}</p>
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
  if (!req) {
    return { post: null }
  }

  const res = await fetch(
    `https://warm-hollows-19814.herokuapp.com/posts/${req.query.id}`
  )
  const post = await res.json()

  return { post }
}
export default News
