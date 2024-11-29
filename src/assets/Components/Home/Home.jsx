import React from 'react';
import './Home.css';
import dice from '../../Images/dice.jpg';
import post_01 from '../../Images/post-01.jpg';
import post_02 from '../../Images/main-post.webp';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div className="posts">
        <div className="left-section">
          <Link to='/'>
            <img src={dice} alt="" />
            </Link>
            <h2>My name</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatibus impedit magnam ex dignissimos.</p>
        </div>

        <div className="popular-posts">
          <h3>Popular post</h3>

          <div className="left-section01">
          <div className="images">
              <img src={post_01} alt="" /></div>
              <div className="texts">
                <h4>Post-1</h4>
                <p>Post details goes here</p>
              </div>
          </div>
          <div className="left-section01">
          <div className="images">
              <img src={post_01} alt="" /></div>
              <div className="texts">
                <h4>Post-1</h4>
                <p>Post details goes here</p>
              </div>
          </div>
          <div className="left-section01">
          <div className="images">
              <img src={post_01} alt="" /></div>
              <div className="texts">
                <h4>Post-1</h4>
                <p>Post details goes here</p>
              </div>
          </div>
        </div>
       
        </div>

        <div className="main-post">
          <div className="post-main">
            <img src={post_02} alt="" />
          </div>
          <div className="text-main">
            <h3>TITLE HEADING</h3>
            <h5>Title Description, <span>November 28, 2024</span></h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur similique ipsa autem corporis eius id tempora suscipit officia sit, explicabo impedit ut dicta, et eaque enim ullam quae nisi provident!</p>
            <button>Explore More</button>
          </div>
        </div>
      </div>
  )
}

export default Home
