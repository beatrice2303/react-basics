import React from 'react'; 
import img1 from '../assets/images/Image1.png'
import img2 from '../assets/images/Image2.png'
import img3 from '../assets/images/Image3.png'
import img4 from '../assets/images/Image4.png'

function Home() {
  return (
    <div className='flex'>
        {/* content */}
        <div className='w-1/2' >
        <h1 className='font-serif Times New Roman text-3xl text-fuchia-400/100' >Empowering Connections, Bridging Worlds</h1>
        <h3 className='font-serif Times New Roman text-xl text-fuchia-400/100'>Where community Meets Compassion</h3>
        <h6 className='font-serif Times New Roman text-base text-fuchia-400/100'>Welcome to handshelp connect, Handshelp Connect helps the deaf and mute Community with passionate volunteers,ensuring no one feels unheard. Join us in fostering equality through communication.</h6>
          
        </div>

        {/* images */}
        <div className='flex w-1/2'>
            <div>
                <img src={img1} className='p-3' />
                <img src={img2} className='p-3' />                
            </div>
            <div>
                <img src={img3} className='p-3'/>
                <img src={img3} className='p-3'/>                
            </div>
        </div>

    </div>
  )
}

export default Home