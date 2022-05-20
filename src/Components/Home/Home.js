import React from 'react'
import Hero from '../Images/Hero.jpg'
import '../Style.css'
import { Link } from 'react-router-dom'
import Join from '../Join/Join'




const Home = () => {
  return (
    <>
      <div className='hero__section'>
        <div className="main__text">
          <h1>The Political <span>POWER</span></h1>
          <p>"The BJP Party constructs a bottom-up vision." <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad esse optio est dolorum rerum eum harum corrupti, vitae aliquid recusandae sint tempora facilis ipsum accusantium.</p>
        </div>
        <img src={Hero} alt="" className='height: 300px' />
      </div>
      <div className='hero__content'>
        <div className="bg-color-dark">
          <div className='slider container-fluid'>
            <h4 className='text-center'>"The BJP Party constructs a bottom-up vision."</h4>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsam totam ipsa tenetur ducimus fuga a fugit odit consequuntur consequatur perspiciatis deserunt earum veniam eum, neque quis esse error, repellendus minima et voluptate non maxime soluta? Asperiores eius excepturi esse veniam sequi alias totam, doloribus voluptas ex porro culpa dolore, rerum voluptatum qui a ab veritatis, pariatur inventore odio deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic culpa dignissimos sed sint, id deleniti eos at nulla ullam error recusandae excepturi repellendus itaque reprehenderit quisquam. Harum, omnis vero aut, distinctio quibusdam nostrum veniam quidem ut totam eius quam laboriosam perspiciatis. Ea molestiae alias magni et dignissimos facilis vitae vero.</p>

          <Link to='/read' />
        </div>
      </div>

      <Join />
    </>
  )
}

export default Home