import React, { useEffect } from 'react';

const ImageInformation2 = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);
    
    return (
        <>
            <img className="project-image2" src="media/Ribar-before-and-after-1(2).jpg" alt=""/>
            <p style={{fontSize: '28px'}}>All this beautiful house needed was new roof tiles and repaint and a little touch-up for the interior. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit temporibus ab aspernatur, suscipit beatae porro. Sit, necessitatibus dolore eum libero fuga id cumque tempora, minima velit earum modi quod consequatur, placeat quo ipsum optio tempore excepturi accusamus possimus blanditiis? Magni blanditiis quasi dolore? Doloribus illo praesentium nobis quo eligendi sed?</p>
            <h1 style={{textDecoration: 'underline', marginTop: '50px'}}>Explore The Interior:</h1>
            <h2  style={{textDecoration: 'underline'}}>Dining Area</h2>
            <img src="media/grey-box.jpg" alt=""/>
            <h2 style={{textDecoration: 'underline'}}>Bathroom</h2>
            <img src="media/grey-box.jpg" alt=""/>
            <h2 style={{textDecoration: 'underline'}}>Master Bedroom</h2>
            <img src="media/grey-box.jpg" alt=""/>
            <h2 style={{textDecoration: 'underline'}}>Kitchen</h2>
            <img src="media/grey-box.jpg" alt=""/>
            <h2 style={{textDecoration: 'underline'}}>Living Room</h2>
            <img src="media/grey-box.jpg" alt=""/>
            <h2 style={{textDecoration: 'underline'}}>Porch</h2>
            <img src="media/grey-box.jpg" alt=""/>
        </>
    )
}

export default ImageInformation2