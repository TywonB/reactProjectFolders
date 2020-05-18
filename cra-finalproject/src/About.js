import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  return (
    <>
      <div className="about">
        <h1>ABOUT US</h1>
        <p className="dotLine">..............................................</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, necessitatibus. Accusamus voluptate laudantium, facilis cum impedit accusantium fuglat vitae voluptatum. Ex eaque iure distinctio accusantium, provident minus blanditiis rem quae dolore maiores fuga modi, sed assumenda corrupti iste optio. Perferendis placeat in commodi voluptates provident quo sed reprehenderit minus sit!</p>
        <img src="media/Construction-Workers-are-Exempt-from-Sick-Leave-Laws.jpg" alt="" className="construction-img img-responsive" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, necessitatibus. Accusamus voluptate laudantium, facilis cum impedit accusantium fuglat vitae voluptatum. Ex eaque iure distinctio accusantium, provident minus blanditiis rem quae dolore maiores fuga modi, sed assumenda corrupti iste optio. Perferendis placeat in commodi voluptates provident quo sed reprehenderit minus sit!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, necessitatibus. Accusamus voluptate laudantium, facilis cum impedit accusantium fuglat vitae voluptatum. Ex eaque iure distinctio accusantium, provident minus blanditiis rem quae dolore maiores fuga modi, sed assumenda corrupti iste optio. Perferendis placeat in commodi voluptates provident quo sed reprehenderit minus sit!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, necessitatibus. Accusamus voluptate laudantium, facilis cum impedit accusantium fuglat vitae voluptatum. Ex eaque iure distinctio accusantium, provident minus blanditiis rem quae dolore maiores fuga modi, sed assumenda corrupti iste optio. Perferendis placeat in commodi voluptates provident quo sed reprehenderit minus sit!</p>
        <p>Now the most important part you all been waiting for and that's pricing. Prices may vary to sq. ft. of house or the number of story the house has. To get more information on prcing <Link to="/contact" className="paragraphLink">contact</Link> our workers.</p>
      </div>
      <div className="head">
        <h1>HEADING</h1>
        <p className="dotLine">.....................................................</p>
        <img src="media/10959706-0-image-m-4_1552522176384.jpg" alt="" className="handshake-img img-responsive" />
        <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
        <h1 className="offerings">What All Do We Offer:</h1>
        <p className="dotLine">...........................................................................................</p>
        <ul>
          <li>We Paint</li>
          <li>We Landscape</li>
          <li>We Construct</li>
          <li>We Plumb</li>
          <li>We Do Carpentry</li>
          <li>We Contract</li>
          <li>We Do Electrical Work</li>
        </ul>
      </div>
    </>
  );
}

export default About;