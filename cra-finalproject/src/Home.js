import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slideshow from './Slideshow';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

    return (
      <div className="home">
        <h1>Welcome to Home Improvement!</h1>
        <div className="information">
            <img src="media/before.jpg" alt="" className="promoImg img-responsive"/>
            <img src="media/after.jpg" alt="" className="promoImg img-responsive"/>
            <p className="paragraph">Here you will find a restoration on a family house of 5. We have replaced items ranging from roofing tiles, shingles, a staircase for easier access to the updated porch. This restoration made the home more updated and modern. Did I fail to mention that we also offer lawn maintenance services. Check out more of our <Link to="/images" className="paragraphLink">projects</Link> to give you more of an idea of what you can and want to improve.</p>
        </div>
        <div className="subcontent1">
          <h1>Lorem ipsum dolor</h1>
          <p className="dotLine">...........................................................................</p>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, cumque!</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium culpa neque itaque tempore?</li>
          </ul>
        </div>
        <div className="subcontent2">
          <h1>Lorem ipsum dolor</h1>
          <p className="dotLine">...........................................................................</p>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, cumque!</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium culpa neque itaque tempore?</li>
          </ul>
        </div>
        <div className="subcontent3">
          <h1>Lorem ipsum dolor</h1>
          <p className="dotLine">...........................................................................</p>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, cumque!</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium culpa neque itaque tempore?</li>
          </ul>
        </div>
        <h2 className="choice">Why Choose Home Improvement for Your Home Repair Needs?</h2>
        <div className="choice-margin">
        <img src="media/local-content-a-img.jpg" alt="" className="img1 img-responsive" />
        <img src="media/shutterstock_524040448.jpg" alt="" className="img2 img-responsive" />
        <img src="media/download.jpg" alt="" className="img3 img-responsive" />
        <img src="media/images.jpg" alt="" className="img4 img-responsive" />
        </div>
        <div className="trustworthy">
          <h2><span style={{color: "#fbb604"}}>&#9745;</span> TRUSTWORTHY</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima et nemo, accusamus dolorum impedit?</p>
        </div>
        <div className="local">
          <h2><span style={{color: "#fbb604"}}>&#9745;</span> LOCAL</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima et nemo, accusamus dolorum impedit?</p>
        </div>
        <div className="guaranteed">
          <h2><span style={{color: "#fbb604"}}>&#9745;</span> GUARANTEED</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima et nemo, accusamus dolorum impedit?</p>
        </div>
        <div className="experienced">
          <h2><span style={{color: "#fbb604"}}>&#9745;</span> EXPERIENCED</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima et nemo, accusamus dolorum impedit?</p>
        </div>
        <Link to="/about" style={{textDecoration: "none"}}><button className="lrnMore">LEARN MORE ABOUT US</button></Link>
        <Slideshow />
      </div>
    );
  };

export default Home;