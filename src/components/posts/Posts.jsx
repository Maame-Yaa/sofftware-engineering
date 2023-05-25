import React from 'react'
import './posts.scss'
import Post from '../post/Post';

const Posts = () => {

  const posts = [
      {
      id: 1,
      name: "Benjamin",
      userId: 1,
      profilePic:
        require('./images/yotube_video.jpg'),
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img: require('./images/N5A0282-540x304.jpg')
    },
    {
      id: 2,
      name: "Sarah",
      userId: 2,
      profilePic:
        require('./images/international-students-acity.jpg'),
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: require('./images/aca-3.png')
    }
  ];


  return (
    <div className='posts'>
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts