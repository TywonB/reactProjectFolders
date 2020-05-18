import React, { useEffect } from 'react';

const ImageInformation4 = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);
    
    return (
        <>
            <img style={{marginTop: '42px'}} src="media/construction(2).jpg" alt=""/>
            <p style={{fontSize: '28px'}}>This is our two story 4 room, 3 baths house. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit temporibus ab aspernatur, suscipit beatae porro. Sit, necessitatibus dolore eum libero fuga id cumque tempora, minima velit earum modi quod consequatur, placeat quo ipsum optio tempore excepturi accusamus possimus blanditiis? Magni blanditiis quasi dolore? Doloribus illo praesentium nobis quo eligendi sed?</p>
            <h1 style={{textDecoration: 'underline', marginTop: '50px'}}>Explore The Interior:</h1>
            <h2  style={{textDecoration: 'underline'}}>Dining Area</h2>
            <img src="media/grey-box.jpg" alt=""/>
            <h2 style={{textDecoration: 'underline'}}>Master Bathroom</h2>
            <img src="media/grey-box.jpg" alt=""/>
            <h2 style={{textDecoration: 'underline'}}>Master Bedroom</h2>
            <img src="media/grey-box.jpg" alt=""/>
            <h2 style={{textDecoration: 'underline'}}>Kitchen</h2>
            <img src="media/grey-box.jpg" alt=""/>
            <h2 style={{textDecoration: 'underline'}}>Living Room</h2>
            <img src="media/grey-box.jpg" alt=""/>
            <h2 style={{textDecoration: 'underline'}}>Guest Bedroom</h2>
            <img src="media/grey-box.jpg" alt=""/>
            <h2 style={{textDecoration: 'underline'}}> Upstairs 2<sup>nd</sup> Bathroom</h2>
            <img src="media/grey-box.jpg" alt=""/>
            <h2 style={{textDecoration: 'underline'}}> Upstairs 3<sup>rd</sup> Bathroom</h2>
            <img src="media/grey-box.jpg" alt=""/>
        </>
    )
}

export default ImageInformation4