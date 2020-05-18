import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Images = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  return (
    <div className="Images">
      <h2 className="font-size">This is our before and after image collection from some of our happy customers that have given us the chance to remodel or update their house. We hope you enjoy the exterior and interior of these houses. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorem exercitationem eos, ea repudiandae sunt tempora impedit optio voluptatum maxime modi, accusantium molestiae adipisci ducimus aperiam. Molestiae distinctio, dolorum, sit corporis amet, nostrum numquam sint quaerat cumque accusamus aut doloremque tempora reprehenderit fuga aliquam id totam ipsam veritatis architecto ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium.</h2>
      <Link to='/ImageInformation1'><img src="media/download(1).jfif" alt="" className="margin-spacing img-size" /></Link>
      <Link to='/ImageInformation2'><img src="media/Ribar-before-and-after-1(1).jpg" alt="" className="img-size" /></Link>
      <Link to='/ImageInformation3'><img src="media/House-architecure-before-and-after-renovation(1).jpg" alt="" className="margin-spacing img-size" /></Link>
      <Link to='/ImageInformation4'><img src="media/construction(1).jpg" alt="" className="img-size" /></Link>
      <Link to='/ImageInformation5'><img src="media/Burnt-House-Before-After(1).jpg" alt="" className="margin-spacing img-size" /></Link>
      <Link to='/ImageInformation6'><img src="media/before-and-after-houses(1).jpg" alt="" className="img-size" /></Link>
    </div>
  );
}

export default Images;