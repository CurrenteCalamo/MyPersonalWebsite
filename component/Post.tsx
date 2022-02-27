import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/scss/ComponentStyles/Post.module.scss'
type post = {
  name?: string
  title?: string
  date?: string
  creator?: string
  image?: string
  body?: string[]
  _id?: string
}

const Post: NextPage<{ post: post }> = ({ post }) => {
  return (
    <>
      <div key={post._id} className={styles.PostWrapper}>
        <div className={styles.PostContaner}>
          <div className={styles.ContanerFirst}>
            <Link href={`/news/${post._id}`}>
              <a>
                <h2>{post.name}</h2>
              </a>
            </Link>
            <div className={styles.ContFirstTitle}>{post.title}</div>
            <div className={styles.ContFirstInfo}>
              Creator {post.creator} {post.date}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
