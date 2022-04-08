import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/scss/Components/Post.module.scss'
import { IPost } from '../types/post'

interface PostProps {
  post: IPost
}

const Post: NextPage<PostProps> = ({ post }) => {
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
