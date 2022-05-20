import React from 'react'
import AboutImg from '../Images/AboutImg.jpg'
import Man from '../Images/man.jpeg'
import '../Style.css'

const About = () => {
  return (
    <>
      <section className='about__banner'>
        <img src={AboutImg} className='about-banner' alt="" />
      </section>

      <div className="about-content">
        <div className="container overlap-div">
          <div className="row flex">
            <div className="col-md-6 ">
              <h2 className='a-heading'>About Us</h2>
            </div>
            <div className="col-md-4 offset-md-2">
              <div className="media-icon flex">
                <div className="bx">
                  <span className='fa fa-facebook'></span>
                </div>
                <div className="bx">
                  <span className='fa fa-twitter'></span>
                </div>
                <div className="bx border">
                  <span className='fa fa-youtube'></span>
                </div>
                <div className="bx">
                  <span className='fa fa-google-plus'></span>
                </div>
              </div>
            </div>
          </div>

          <div className="about__bio">
            <div className="row">
              <div className="col-md-4">
                <div className="img-box">

                  <img src={Man} alt="" />
                </div>
              </div>
              <div className="col-md-6 offset-md-2 my-4">
                <p>Through his life, ex man has always been the strongest proponent of politics of purpose. Over the years, he has lent his voice to a number of issues but has always remained focused on propagating non-violence, equality and justice. He has imbibed these virtues through a lifelong tryst with Indian politics and history and has developed a keen understanding of the Indian social fabric. <br /> <br /> Having experienced the pain of losing both his father and grandmother to acts of violence and hatred, ex man  has always been a champion of Gandhian philosophies of ahimsa and truth. <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores earum inventore nam possimus! Voluptate rem atque, quo animi dolor ad laudantium accusamus vero, doloribus eos consequuntur corporis tempora cum?</p>
              </div>
            </div>


            <br />
            <p>Born on 19 June 1970, ex man spent his early childhood between Delhi, the political center of India, and Dehradun, a town nestled in the valley between the Himalayas and Shivaliks. He began his undergraduate career at Delhi’s St. Stephen’s College before moving to Harvard University in the USA. In his second year, Rahul transferred to Rollins College in Florida due to security threats following his father’s, the late Prime Minister Rajiv Gandhi’s, assassination. ex man graduated with a Bachelor’s degree in 1994. The year after, he obtained his M. Phil from Trinity College, Cambridge.</p>
            <br />
            <p>Rahul began his professional career with the Monitor Group, a management consulting firm based out of London - he was adamant on creating a professional career before joining politics. He soon returned to India and set up his own technology consultancy in Mumbai, where he led his team as the Director. The influence of his work in the management and technology sector is apparent in his political leanings. Rahul has always been a strong proponent of harnessing the scale and dexterity that technology can lend while amplifying the power of India’s greatest asset — her citizens.</p>
            <br />
            <p>The call to serve our nation and to be an instrumental part of her growth came to ex man in 2004. He chose to stand from his father’s constituency and continue the legacy of serving the people of Amethi in Uttar Pradesh.</p>
            <br />
            <p>Rahul won his first election with an overwhelming margin of 2,90,853 votes — a testament to the faith placed by the people of his constituency in him. From the beginning, it was apparent that Rahul believed that our nation’s future lies with her people. Through the ebbs and flows of a decade-long political career, Rahul has held true to the very principles that won him the hearts of the people in his very first election.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About