import React from 'react'

export const Post = ({ post }) => (
  <div>
    <h2>{post.title}</h2>
    <p>{post.body.substring(0, 100)}</p>
    </div>
)