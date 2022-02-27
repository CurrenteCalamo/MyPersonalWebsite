import type { NextPage } from 'next'
import Head from 'next/head'
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
const Posts: NextPage<{ posts: post[] }> = ({ posts }) => {
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

Posts.getInitialProps = async () => {
  const res = await fetch(`https://warm-hollows-19814.herokuapp.com/getAll`)
  const posts = await res.json()

  return { posts }
}

export default Posts
