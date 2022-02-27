import type { NextPage } from 'next'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { useEffect, useState } from 'react'
import Footer from '../../component/Footer'
import Post from '../../component/Post'
import styles from '../../styles/scss/Posts.module.scss'

type post = {
  name?: string
  title?: string
  date?: string
  creator?: string
  image?: string
  body?: string[] | any
  _id?: string
}

const Posts: NextPage<{ posts: post[] }> = ({ posts: serverPost }) => {
  const [posts, setPosts] = useState(serverPost)
  useEffect(() => {
    async function load() {
      fetch(`https://warm-hollows-19814.herokuapp.com/posts/getAll`)
        .then((response) => response.json())
        .then((posts) => setPosts(posts))
    }
    if (!serverPost) {
      load()
    }
  })
  if (!posts) {
    return (
      <>
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
      </>
    )
  }
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta charSet="utf-8" />
      </Head>

      <div className={styles.PostsWrapper}>
        <h1>Posts</h1>
        <div className={styles.PostsContener}>
          {posts.map((req: post) => (
            <Post key={req._id} post={req}></Post>
          ))}
        </div>

        <Footer></Footer>
      </div>
    </>
  )
}
Posts.getInitialProps = async (req) => {
  if (!req) {
    return { posts: null }
  }

  const res = await fetch(
    `https://warm-hollows-19814.herokuapp.com/posts/getAll`
  )
  const posts = await res.json()

  return { posts }
}
export default Posts
