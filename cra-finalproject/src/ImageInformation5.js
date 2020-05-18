import React, { useEffect } from 'react';

const ImageInformation5 = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);
    
    return (
        <>
            <img style={{width: '670px', marginTop: '42px'}} src="media/Burnt-House-Before-After(2).jpg" alt=""/>
            <p style={{fontSize: '28px'}}>This is our most remodeled house that we have worked on due to it being burned down. This house has 2 beds and 2 baths. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit temporibus ab aspernatur, suscipit beatae porro. Sit, necessitatibus dolore eum libero fuga id cumque tempora, minima velit earum modi quod consequatur, placeat quo ipsum optio tempore excepturi accusamus possimus blanditiis? Magni blanditiis quasi dolore? Doloribus illo praesentium nobis quo eligendi sed?</p>
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
            <h2 style={{textDecoration: 'underline'}}>Upstairs 2<sup>nd</sup> Bathroom</h2>
            <img src="media/grey-box.jpg" alt=""/>
        </>
    )
}

export default ImageInformation5