import React from 'react';
import s from './Post.module.css';
import postAvatar from '../../../../assets/images/avatar_post.jpg'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={postAvatar} alt="avatar_img"/>
      { props.message }
      <div>
        <span>Like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;