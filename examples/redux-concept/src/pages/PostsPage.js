import React, { useEffect } from 'react'
import { connect } from 'react-redux/es/exports'
import { fetchPosts } from '../actions/postsAction'
import { Post } from '../components/Post'

const PostsPage = ({dispatch,loading,posts,hasError}) => {
    useEffect(() =>{
        dispatch(fetchPosts())
    },[dispatch])

    const renderPosts = () =>{
        if(loading) return <p>Loading Posts ....</p>
        if(hasError) return <p>Unable to display posts.</p>
        return posts.map((post) => <Post key={post.id} post={post} />)
    }

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
}

const mapStateToProps =(state) => (
    {
        loading: state.posts.loading,
        posts: state.posts.posts,
        hasError: state.posts.hasError,
    }
)

export default connect(mapStateToProps)(PostsPage)