import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import styles from '../../styles/scss/News.module.scss'
import { IPost } from '../../types/post'

interface PostProps {
  post: IPost
}
const News: NextPage<PostProps> = ({ post: serverPost }) => {
  const router = useRouter()
  const [post, setPosts] = useState(serverPost)
  useEffect(() => {
    async function load() {
      fetch(`https://warm-hollows-19814.herokuapp.com/posts/${router.query.id}`)
        .then((response) => response.json())
        .then((post) => setPosts(post))
    }
    if (!serverPost) {
      load()
    }
  })
  if (!post) {
    return (
      <div className="wrapperloader">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <div className={styles.NewsWrapper}>
        <div className={styles.Content}>
          <h1>{post.title}</h1>
          {post.body.map((body: string, i: number) => (
            <p key={i}>{body}</p>
          ))}
          <div>
            {post.creator} {post.date}
          </div>

          <div className={styles.PostImage}></div>
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
