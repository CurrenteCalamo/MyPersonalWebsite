import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Post from '../../components/Post'
import styles from '../../styles/scss/Posts.module.scss'
import { IPost } from '../../types/post'

interface PostsProps {
  posts: IPost[]
}
const Posts: NextPage<PostsProps> = ({ posts: serverPost }) => {
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
        <div className="wrapperloader">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
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
        <div>
          <h1>Posts</h1>
          <div className={styles.PostsContener}>
            {posts.map((req) => (
              <Post key={req._id} post={req}></Post>
            ))}
          </div>
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
